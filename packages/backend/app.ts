import express from 'express';
const app: express.Application = express();
const dotenv = require('dotenv');
const connectDB = require('./db/db.js');
const cors = require('cors');

//Load env vars
dotenv.config({ path: '.env' });

const port = 8080;

//Route files
const insuranceProductsRoutes = require('./routes/insuranceProducts');
const customersRoutes = require('./routes/customers');

// middleware
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

//Mount routers
app.use('/api/insuranceProducts', insuranceProductsRoutes);
app.use('/api/customers', customersRoutes);

const start = async () => {
  try {
    const conn = await connectDB();
    console.log(`Database connected : ${conn.connection.host}`);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}....`);
    });
  } catch (error) {}
};

start();
