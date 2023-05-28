import { Request, Response } from 'express';
const Customer = require('../models/Customer');

const getAllCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await Customer.find();

    console.log('customer', customers);
    res.status(201).json({ customers });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createCustomer = async (req: Request, res: Response) => {
  try {
    const { name, email, age, insuranceProductId } = req.body;
    const foundCustomer = await Customer.findOne({ email: email });

    if (foundCustomer) {
      const insuranceProductIds = [...new Set([...foundCustomer.insuranceProductIds, insuranceProductId])];

      const query = { email: email };
      const updatedCustomer = await Customer.findOneAndUpdate(query, { insuranceProductIds }, { new: true });
      res.status(200).json({ updatedCustomer });
      return;
    }

    const customer = await Customer.create({
      name,
      email,
      age,
      insuranceProductIds: [insuranceProductId],
    });
    console.log('customer', customer);
    res.status(201).json({ customer });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export { createCustomer, getAllCustomers };
