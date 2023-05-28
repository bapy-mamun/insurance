import React from 'react';
import './index.scss';
import { Button } from '../../atoms/button';
import { Customer, InsuranceProduct } from '../../../utils/types';

interface FormProps {
  customerData: Customer;
  setCustomerData: React.Dispatch<React.SetStateAction<Customer>>;
  insuranceData: InsuranceProduct[];
  setFormStep: React.Dispatch<React.SetStateAction<'step1' | 'step2'>>;
}

const Form = ({ customerData, setCustomerData, insuranceData, setFormStep }: FormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCustomerData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCustomerData(prev => ({
      ...prev,
      insuranceProductId: e.target.value,
    }));
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
    <form className="m-form" onSubmit={(event) => {
      event.preventDefault()
      setFormStep('step2');
    }}>
      <p className="m-form__title">Buy Insurance</p>

      <fieldset className="m-form__formGroup">
        <label>Full Name</label>
        <input
          id="formName"
          className="m-form__formInput"
          name="name"
          type="text"
          required
          onChange={handleChange}
          value={customerData.name}
        />
      </fieldset>

      <fieldset className="m-form__formGroup">
        <label>Email</label>
        <input
          id="formEmail"
          className="m-form__formInput"
          name="email"
          type="email"
          required
          onChange={handleChange}
          value={customerData.email}
        />
      </fieldset>

      <fieldset className="m-form__formGroup">
        <label>Age</label>
        <input
          id="formSubject"
          className="m-form__formInput"
          name="age"
          min={18}
          type="number"
          required
          onChange={handleChange}
          value={customerData.age}
        />
      </fieldset>

      <div className="m-form__formGroup">
        <label>Insurance</label>
        <select className="m-form__formInput" onChange={handleSelectChange}>
          {insuranceData.map(data => (
            <option key={data._id} value={data._id}>
              {data.name}
            </option>
          ))}
        </select>
      </div>
      <div className="m-form__formGroup">
        <label>Price</label>
        <input className="m-form__formInput" type="text" value={getPrice()} onChange={() => {}} />
      </div>
      <div className="m-form__submit">
        <Button type='submit'>Next</Button>
      </div>
    </form>
  );
};

export default Form;
