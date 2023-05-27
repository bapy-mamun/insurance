import mongoose from "mongoose";

const InsuranceProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
    trim: true,
    maxLength: [20, "name can not be more than 20 chars"],
  },
  type: {
    type: String,
    required: [true, "Please enter type"],
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Please enter price"],
  },
}, { collection: 'insuranceProducts' });

module.exports = mongoose.model("InsuranceProduct", InsuranceProductSchema);
