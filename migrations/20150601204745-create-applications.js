"use strict";

module.exports = {
  up: function(migration, DataTypes) {
    return migration.createTable('Applications', {
        number: DataTypes.STRING,
        description: DataTypes.TEXT,
        application_uri: DataTypes.TEXT,
        description_uri: DataTypes.TEXT
      });
  },

  down: function(migration, DataTypes) {
    return migration.dropTable('Applications');
  }
};
