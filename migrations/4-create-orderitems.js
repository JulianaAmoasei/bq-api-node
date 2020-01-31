'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orderitems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'products', key:'id'}
      },
      productExtraId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {model:'products', key:'id'}
      },
      orderId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'orders', key:'id'}
      },
      options: {
        allowNull: true,
        type: Sequelize.STRING
      },
      qtd: {
        allowNull: false,
        type: Sequelize.INTEGER
      },      
       createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orderitems');
  }
};