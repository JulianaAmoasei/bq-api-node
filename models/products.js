'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};