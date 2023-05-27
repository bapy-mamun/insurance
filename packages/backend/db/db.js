const mongoose = require("mongoose");
const databaseName = "insurance_db";

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  return mongoose.connect(`${MONGO_URI}/${databaseName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};

module.exports = connectDB;