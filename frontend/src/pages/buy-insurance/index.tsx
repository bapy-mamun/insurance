import './index.scss';

import React from 'react';

import Form from '../../components/molecules/form';

const BuyInsurance: React.FC = () => {
  return (
    <div className="p-buyInsurance">
      <div className="p-buyInsurance__form">
        <Form />
      </div>
    </div>
  );
};

export default BuyInsurance;
