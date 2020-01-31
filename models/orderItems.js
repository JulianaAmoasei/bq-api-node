'use strict';
module.exports = (sequelize, DataTypes) => {
  const orderitems = sequelize.define('orderitems', {
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    options: DataTypes.STRING,
    qtd: DataTypes.INTEGER,
    productExtraId: DataTypes.INTEGER
  }, {});
  orderitems.associate = function(models) {
    orderitems.belongsTo(models.products)
    orderitems.belongsTo(models.orders)

  };
  return orderitems;
};