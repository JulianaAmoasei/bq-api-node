import models from '../../models/index';

const getAll = async (req, res) => {
  const orders = await models.orders.findAll({raw: true});
  res.json(orders);
};

const addOrder = async (req, res) => {
  const newOrder = await models.orders.create(req.body);
  res.json(newOrder);
};

export default {
  getAll,
  addOrder
}