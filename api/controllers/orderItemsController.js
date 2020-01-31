import models from '../../models/index';

const addOrderItem = async (req, res) => {
  const newOrderItem = await models.orderitems.create(req.body);
  res.json(newOrderItem);
};

export default {
  addOrderItem
}