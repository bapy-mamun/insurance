import mongoose from "mongoose";

const CustomersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
    trim: true,
    maxLength: [20, "name can not be more than 20 chars"],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  age: {
    type: Number,
    required: [true, "Please enter age"],
  },
  
});

module.exports = mongoose.model("Customers", CustomersSchema);
