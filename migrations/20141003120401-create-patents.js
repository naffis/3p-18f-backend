"use strict";

module.exports = {
  up: function(migration, DataTypes) {
    return migration.createTable('Patents', {
        number: DataTypes.STRING,
        description: DataTypes.TEXT,        
        description_uri: DataTypes.TEXT
      });      
  },

  down: function(migration, DataTypes) {
    return migration.dropTable('Patents');
  }
};
