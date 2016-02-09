"use strict";

module.exports = function(sequelize, DataTypes) {
  var Foreignreference = sequelize.define("Foreignreference", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pages: DataTypes.STRING,
    description: DataTypes.TEXT,
    non_english: DataTypes.BOOLEAN,
    foreignreference_uri: DataTypes.STRING,
    translation_uri: DataTypes.STRING,
    description_uri: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Foreignreference.belongsTo(models.Priorart);
      }
    }
  });

  return Foreignreference;
};
