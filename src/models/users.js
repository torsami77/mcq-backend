'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    is_verified: DataTypes.BOOLEAN,
    is_admin: DataTypes.BOOLEAN,
    password: DataTypes.STRING
  }, {});

  Users.associate = (models) => {
    Users.hasMany(models.Assessments, { as: 'assessments', foreignKey: 'user_id' });
  };
  return Users;
};
