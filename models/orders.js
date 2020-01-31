'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    clientName: DataTypes.STRING,
    status: DataTypes.STRING,
    tableNumber: DataTypes.INTEGER
  }, {});
  orders.associate = function(models) {
    orders.hasMany(models.orderitems)
  };
  return orders;
};