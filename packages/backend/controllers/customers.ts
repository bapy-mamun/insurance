import { Request, Response } from 'express';
const Customer = require('../models/Customer');
const InsuranceProduct = require('../models/InsuranceProduct');

const getAllCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await Customer.aggregate([
      {
        $lookup: {
          from: 'insuranceProducts',
          localField: 'insuranceProductIds',
          foreignField: '_id',
          as: 'insuranceProducts',
        },
      },
    ]);

    res.status(200).json({ customers });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createCustomer = async (req: Request, res: Response) => {
  try {
    const { name, email, age, insuranceProductId } = req.body;
    const foundCustomer = await Customer.findOne({ email: email });
    if (foundCustomer) {
      if (foundCustomer.insuranceProductIds.includes(insuranceProductId)) {
        const foundInsurance = await InsuranceProduct.findById(insuranceProductId);
        return res.status(200).json({ exists: true, msg: `User already has ${foundInsurance.type} insurance` });
      }

      const insuranceProductIds = [...foundCustomer.insuranceProductIds, insuranceProductId];
      const query = { email: email };
      const updatedCustomer = await Customer.findOneAndUpdate(query, { insuranceProductIds }, { new: true });
      res.status(200).json({ updatedCustomer });
      return;
    }

    const newData = {
      name,
      email,
      age,
      insuranceProductIds: [insuranceProductId],
    };
    const customer = await Customer.create(newData);
    res.status(201).json({ customer });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export { createCustomer, getAllCustomers };
