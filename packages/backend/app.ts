import express from "express";
const app: express.Application = express();
const dotenv = require("dotenv");
const connectDB = require("./db/db.js");

//Load env vars
dotenv.config({ path: ".env" });

const port = 8080;

// middleware
app.use(express.json());

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
