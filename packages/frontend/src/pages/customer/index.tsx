import React, { useEffect, useState } from 'react';
import './index.scss';
import { Heading } from '../../components/atoms/heading';
import InsuranceCard from '../../components/molecules/insurance-card';
import { Button } from '../../components/atoms/button';
import type { Customer, InsuranceProduct } from '../../utils/types';

const Customer: React.FC = () => {
  const [customerData, setCustomerData] = useState<any>(null);

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
      console.log(data);
      //setCustomerData(data.insuranceProducts);
    };
    fetchData();
  }, []);

  return (
    <div className="p-customer">
      <div className="p-customer__sectionHeading">
        <Heading>Customer List</Heading>
      </div>
      
    </div>
  );
};

export default Customer;
