"use strict";

module.exports = function(sequelize, DataTypes) {
  var Priorart = sequelize.define("Priorart", {
    number: DataTypes.STRING,
    email_address: DataTypes.STRING,
    name: DataTypes.STRING,
    statement: DataTypes.STRING,
    signature: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Priorart.hasMany(models.Patent);
        Priorart.hasMany(models.Nonpatentliterature);
        Priorart.hasMany(models.Application);
        Priorart.hasMany(models.Foreignreference);
      }
    }
  });

  return Priorart;
};
