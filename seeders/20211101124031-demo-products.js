'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      id: 1,
      name: 'Product1',
      price: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Product2',
      price: 150,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
