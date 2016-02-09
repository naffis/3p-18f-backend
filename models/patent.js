"use strict";

module.exports = function(sequelize, DataTypes) {
  var Patent = sequelize.define("Patent", {
    number: DataTypes.STRING, //reqd
    description: DataTypes.TEXT,    
    description_uri: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Patent.belongsTo(models.Priorart);
      }
    }
  });

  return Patent;
};
