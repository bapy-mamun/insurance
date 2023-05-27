import { Request, Response } from 'express';
const InsuranceProduct = require("../models/InsuranceProduct");

const getAllInsuranceProducts = async (req: Request, res: Response) => {
  try {
    const insuranceProducts = await InsuranceProduct.find();
    console.log('insuranceProducts', insuranceProducts);
    res.status(200).json({ insuranceProducts });

  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export { getAllInsuranceProducts };