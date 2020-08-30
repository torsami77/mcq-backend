'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stories = sequelize.define('Stories', {
    stories: DataTypes.TEXT
  }, {});

  Stories.associate = (models) => {
    Stories.hasMany(models.Assessments, { as: 'questions', foreignKey: 'story_id' });
  };
  return Stories;
};
