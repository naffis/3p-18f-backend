"use strict";

module.exports = function(sequelize, DataTypes) {
  var Application = sequelize.define("Application", {
    number: DataTypes.STRING,
    description: DataTypes.TEXT,
    application_uri: DataTypes.TEXT,
    description_uri: DataTypes.TEXT  
  }, {
    classMethods: {
      associate: function(models) {
        Application.belongsTo(models.Priorart);
      }
    }
  });

  return Application;
};
