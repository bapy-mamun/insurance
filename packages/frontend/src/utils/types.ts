export type InsuranceProduct = {
  _id: string;
  image: string;
  name: string;
  type: string;
  price: number;
};

export type Customer = {
  _id: string;
  name: string;
  email: string;
  age: number;
  insuranceProductId: string;
};
