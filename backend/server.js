import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import uploadRouter from './routes/uploadRoutes.js';

import User from './models/userModel.js';

import data from './data.js';
import Product from './models/productModel.js';

dotenv.config({ path: './.env' });

mongoose
//In .env file: MONGODB_URI=mongodb+srv://omarnegm3:M0ng-@t-comp@e-cluster.xjmmyxq.mongodb.net/?retryWrites=true&w=majority
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to dataBase');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/upload', uploadRouter);
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);


const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening at localhost:${port}`);
});


