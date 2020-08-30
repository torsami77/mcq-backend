'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'torsami77@gmail.com',
      first_name: 'Samson',
      last_name: 'Samuel',
      is_verified: true,
      is_admin: true,
      password: '$2y$10$Ib5NW7T1RHh6UQg3bLIh6O6/twfbxFvamEYVishpEXcLe9OgTUr4K',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
