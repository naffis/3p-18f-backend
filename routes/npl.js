var models  = require('../models');
var express = require('express');
var router  = express.Router();
var nodemailer = require('nodemailer');
var ses = require('nodemailer-ses-transport');
var markdown = require('nodemailer-markdown').markdown;
var config = require(__dirname + "/../config/config");
var Sequelize = require('sequelize')

// ?cpc=123&cn=456&keyword=something&offset=10&limit=10
router.get('/', function(req, res) {
  console.log("cpc="+req.query.cpc);
  console.log("cn="+req.query.cn);
  console.log("keyword="+req.query.keyword);
  // implement numresults and offset
  models.Nonpatentliterature.findAll({
  	where: Sequelize.or(
      	{ cooperative_patent_classification: req.query.cpc },
      	{ class_number: req.query.cn },
      	{ keywords: { $like: "%"+req.query.keyword+"%" } },
        { abstract: { $like: "%"+req.query.keyword+"%" } },
        { title: { $like: "%"+req.query.keyword+"%" } },
        { concise_description: { $like: "%"+req.query.keyword+"%" } }
  	),  	
  	offset: req.query.offset,
    limit: req.query.limit  
  }).then(function(npl) {
    res.json(npl);
  })
});

module.exports = router;