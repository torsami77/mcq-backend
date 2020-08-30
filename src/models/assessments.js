module.exports = (sequelize, DataTypes) => {
  const Assessments = sequelize.define('Assessments', {
    user_id: DataTypes.INTEGER,
    stories: DataTypes.STRING,
    answers: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {});

  Assessments.associate = (models) => {
    Assessments.belongsTo(models.Users, { as: 'user', foreignKey: 'user_id' });
  };
  return Assessments;
};
