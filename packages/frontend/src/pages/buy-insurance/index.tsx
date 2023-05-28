import React, { useEffect, useState } from 'react';
import './index.scss';
import Form from '../../components/molecules/form';
import { Customer, InsuranceProduct } from '../../utils/types';
import { Button } from '../../components/atoms/button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const initialCustomerData: Customer = {
  _id: '',
  name: '',
  email: '',
  age: 18,
  insuranceProductId: '',
};

const BuyInsurance: React.FC = () => {
  const navigate = useNavigate();
  const [formStep, setFormStep] = React.useState<'step1' | 'step2'>('step1');
  const [insuranceData, setInsuranceData] = useState<InsuranceProduct[]>([]);
  const [customerData, setCustomerData] = useState<Customer>(initialCustomerData);

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

      setInsuranceData(data.insuranceProducts);

      if (data.insuranceProducts && data.insuranceProducts.length) {

        setCustomerData(prev => ({
          ...prev,
          insuranceProductId: data.insuranceProducts[0]._id,
        }));
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async () => {
    const rawResponse = await fetch('http://localhost:8080/api/customers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerData),
    });

    const content = await rawResponse.json();

    if (content.exists) {
      toast.warn(`${content.msg}, Go back & Change Insurance`, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return
    }
    toast.success('You have successfully bought the insurance!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
    navigate('/');
  };

  const handleNextPrevClick = () => {
    if (formStep === 'step1') {
      setFormStep('step2');
    } else {
      setFormStep('step1');
    }
  };

  const getPrice = () => {
    if (customerData.insuranceProductId) {
      const found = insuranceData.find(item => customerData.insuranceProductId === item._id);
      if (found) {
        return found.price;
      }
    }
    return '';
  };

  return (
    <div className="p-buyInsurance">
      {formStep === 'step1' ? (
        <div className="p-buyInsurance__form">
          <Form
            insuranceData={insuranceData}
            customerData={customerData}
            setCustomerData={setCustomerData}
            setFormStep={setFormStep}
          />
        </div>
      ) : (
        <div className="p-buyInsurance__payementForm">
          <Button onClick={handleNextPrevClick}>Go Back</Button>
          <div className="p-buyInsurance__payementCard">
            <h2>Payement Amount</h2>
            <h3>
              {getPrice()}
              <span>¥</span>
            </h3>
          </div>
        </div>
      )}
      <div className="p-buyInsurance__payementFormButtons">
        {formStep === 'step2' ? (
          <>
            <Button onClick={handleSubmit}>Buy</Button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default BuyInsurance;
