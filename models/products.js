'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2)
  }, {});
  products.associate = function(models) {
    products.hasMany(models.orderitems)
  };
  return products;
};