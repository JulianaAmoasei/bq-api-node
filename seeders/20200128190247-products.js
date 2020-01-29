'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */

      return queryInterface.bulkInsert('products', [
        {
          name: 'Café',
          price: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Maça',
          price: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Pão',
          price: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Queijo',
          price: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */

      return queryInterface.bulkDelete('products', null, {});

  }
};
