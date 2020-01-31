import models from '../../models/index';

const getOrders = async () => {
  const openOrders = await models.orders.findAll({ 
    where: { status: 'pending' },
    // include: [
    //   {
    //     model: models.orderitems
    //   }
    // ]
  });
  return openOrders;
};

const getAll = async (req, res) => {
  
  // const table = await models.products.findAll({raw: true});
  res.json(await getOrders());

};

export default {
  getAll
}

////////////////////////////////

// const table = [{
//   numero: 12,
//   orders: [
//     {
//       cliente: "Satanás",
//       itens: [
//         {
//           produto: "pão",
//           preco: 5.0,
//           quant: 2,
//           opcional: "veg",
//           extra: "ovo",
//           precoExtra: 1.0
//         },
//         {
//           produto: "suco",
//           preco: 2.0,
//           quant: 1,
//           opcional: null,
//           extra: null,
//           precoExtra: null
//         } 
//       ]
//     },
//     {
//       cliente: "Churrumina",
//       itens: [
//         {
//           produto: "suco",
//           preco: 2.0,
//           quant: 1,
//           opcional: null,
//           extra: null,
//           precoExtra: null
//         } 
//       ]
//     }
//   ]
// }]
// res.json(table);
