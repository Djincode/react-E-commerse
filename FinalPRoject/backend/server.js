// import express from 'express';
// import dotenv from 'dotenv'
// dotenv.config();
// import cors from 'cors'
// import products from './data/products.js'



// const port = process.env.PORT || 5000;

// const app = express();
// app.get('/', (req,res)=>{
//     res.send('API is running...')
// });

// app.get('/api/products', (req,res)=>{
//     res.json(products)
// })

// app.get('/api/products/:id', (req,res)=>{
//     const product = products.find((p)=>p._id === req.params.id);
//     res.json(product)
// })

// app.listen(port, ()=> console.log(`Server is running on port ${port}`))


import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import products from './data/products.js';
import conectDB from './config/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

conectDB();

app.use(cors()); // Tüm kaynaklara erişime izin vermek

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
