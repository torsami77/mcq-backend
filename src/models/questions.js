'use strict';
module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define('Questions', {
    story_id: DataTypes.INTEGER,
    question: DataTypes.STRING,
    option_1: DataTypes.STRING,
    option_2: DataTypes.STRING,
    option_3: DataTypes.STRING,
    option_4: DataTypes.STRING
  }, {});

  Questions.associate = (models) => {
    Questions.belongsTo(models.Stories, { as: 'Story', foreignKey: 'story_id' });
  };
  return Questions;
};
