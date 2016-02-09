var models  = require('../models');
var express = require('express');
var router  = express.Router();
var nodemailer = require('nodemailer');
var ses = require('nodemailer-ses-transport');
var markdown = require('nodemailer-markdown').markdown;
var config = require(__dirname + "/../config/config");

router.post('/', function(req, res, next) {
  var priorart = models.Priorart.create({
    number: req.body.number,
    type: req.body.type,    
    email_address: req.body.email_address,
    name: req.body.name,
    statement: req.body.statement,
    signature: req.body.signature,
    
    Patents: req.body.Patents,
    Foreignreferences: req.body.Foreignreferences,
    Nonpatentliteratures: req.body.Nonpatentliteratures,
    Applications: req.body.Applications
  }, {
    include: [
      models.Patent, 
      models.Foreignreference, 
      models.Nonpatentliterature, 
      models.Application
  ]}).then(function(priorart) {

    var transporter = nodemailer.createTransport(ses({
      accessKeyId: config.aws_config.accessKeyId,
      secretAccessKey: config.aws_config.secretAccessKey
    }));
    transporter.use('compile', markdown());

    transporter.sendMail({      
      from: "someemail@domain.com", 
      to: priorart.name + "<" + priorart.email_address + ">",
      subject: "Emailing with nodemailer",
      markdown: {path: __dirname + '/../email.md'}
    }, function(error, response) {
      if(error) {
         console.log(error);
      } else {
         console.log("Message sent: " + response.message);
      }
       
      transporter.close();
    });

    // can we generate a pdf
    
    res.json(priorart);
  });    
});

module.exports = router;
