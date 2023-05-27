import React, { useEffect, useState } from 'react';
import './index.scss';
import { Heading } from '../../components/atoms/heading';
import InsuranceCard from '../../components/molecules/insurance-card';
import { Button } from '../../components/atoms/button';
import type { InsuranceProduct } from '../../utils/types';

const Home: React.FC = () => {
  const [insuranceData, setInsuranceData] = useState<InsuranceProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/api/insuranceProducts', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
      setInsuranceData(data.insuranceProducts);
    };
    fetchData();
  }, []);

  return (
    <div className="p-home">
      <div className="p-home__sectionHeading">
        <Heading>Insurance List</Heading>
      </div>
      <div className="p-home__insuranceListContainer">
        {insuranceData.map((data, index) => (
          <InsuranceCard
            key={data._id}
            _id={data._id}
            image={data.image}
            name={data.name}
            type={data.type}
            price={data.price}
          />
        ))}
      </div>
      <div className="p-home__buyInsuranceButton">
        <Button href="/buy-insurance">Buy Insurance</Button>
      </div>
    </div>
  );
};

export default Home;
