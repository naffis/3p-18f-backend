"use strict";

module.exports = {
  up: function(migration, DataTypes) {
    return migration.createTable('Priorarts', {
        number: DataTypes.STRING,        
        email_address: DataTypes.STRING,
        name: DataTypes.STRING,        
        statement: DataTypes.STRING,
        signature: DataTypes.STRING
      });      
  },

  down: function(migration, DataTypes) {
    return migration.dropTable('Priorarts');      
  }
};
