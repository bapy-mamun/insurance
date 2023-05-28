import React, { useEffect, useState } from 'react';
import './index.scss';
import { Heading } from '../../components/atoms/heading';
import { CustomerList, InsuranceProduct } from '../../utils/types';
// import InsuranceCard from '../../components/molecules/insurance-card';
// import { Button } from '../../components/atoms/button';
// import type { Customer, InsuranceProduct } from '../../utils/types';

const Customer: React.FC = () => {
  const [customerData, setCustomerData] = useState<CustomerList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/api/customers', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data.customers);
      setCustomerData(data.customers);
    };
    fetchData();
  }, []);

  return (
    <div className="p-customer">
      <div className="p-customer__sectionHeading">
        <Heading>Customer List</Heading>
      </div>
      <ul className="p-customer__customersList">
        {customerData.map((customer: CustomerList) => (
          <li className="p-customer__card">
            <h2 className="p-customer__name">{customer.name}</h2>
            <p className="p-customer__email">{customer.email}</p>
            <div className="p-customer__insurance">
              <div className="p-customer__insurance_title">Insurances: </div>
              {customer.insuranceProducts.map((ip: InsuranceProduct) => (
                 <span className="p-customer__insurance_item">{ip.name}</span>
               ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Customer;
