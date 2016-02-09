"use strict";

module.exports = function(sequelize, DataTypes) {
  var Nonpatentliterature = sequelize.define("Nonpatentliterature", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pages: DataTypes.STRING,
    concise_description: DataTypes.TEXT,
    non_english: DataTypes.BOOLEAN,
    nonpatentliterature_uri: DataTypes.STRING,
    translation_uri: DataTypes.STRING,
    description_uri: DataTypes.STRING,
    abstract: DataTypes.TEXT,
    accession_number: DataTypes.STRING,
    class_number: DataTypes.TEXT,
    document_identifier: DataTypes.STRING,
    document_type: DataTypes.STRING,
    examiner_submission_date: DataTypes.STRING,
    examiner_comments: DataTypes.TEXT,
    examiner_name: DataTypes.STRING,
    full_text: DataTypes.TEXT,
    cooperative_patent_classification: DataTypes.STRING,
    journal_title: DataTypes.STRING,
    keywords: DataTypes.TEXT,
    other_references: DataTypes.TEXT,
    publication_date: DataTypes.STRING,
    publication_information: DataTypes.TEXT,
    record_type: DataTypes.TEXT,
    source: DataTypes.TEXT,
    tech_center: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Nonpatentliterature.belongsTo(models.Priorart);
      }
    }
  });

  return Nonpatentliterature;
};