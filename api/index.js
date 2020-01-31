import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import productRoutes from './routes/productRoutes';
import ordersRoutes from './routes/ordersRoutes';
import orderItemsRoutes from './routes/orderItemsRoutes';
// import tableRoutes from './routes/tableRoutes';
require('dotenv').config()

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.use('/api/products', productRoutes);
app.use('/api/orderitems', orderItemsRoutes);
app.use('/api/orders', ordersRoutes);
// app.use('/api/tables', tableRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app