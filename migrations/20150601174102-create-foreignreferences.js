"use strict";

module.exports = {
  up: function(migration, DataTypes) {
    return migration.createTable('Foreignreferences', {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        pages: DataTypes.STRING,
        description: DataTypes.TEXT,
        non_english: DataTypes.BOOLEAN,
        foreignreference_uri: DataTypes.STRING,
        translation_uri: DataTypes.STRING,
        description_uri: DataTypes.STRING
      });      
  },

  down: function(migration, DataTypes) {
    return migration.dropTable('Foreignreferences');    
  }
};
