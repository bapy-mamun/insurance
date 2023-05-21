import { Request, Response } from 'express';
const InsuranceProducts = require("../models/InsuranceProducts");

const getAllInsuranceProducts = async (req: Request, res: Response) => {
  try {
    const insuranceProducts = await InsuranceProducts.find();
    console.log('insuranceProducts', insuranceProducts);
    res.status(200).json({ insuranceProducts });

  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export { getAllInsuranceProducts };