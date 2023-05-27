import React from 'react';
import './index.scss';
import type { InsuranceProduct } from '../../../utils/types';

const InsuranceCard: React.FC<InsuranceProduct> = ({ name, image, type, price }: InsuranceProduct) => {
  return (
    <a href="/buy-insurance" className="m-insuranceCard">
      <div className="m-insuranceCard__imgBox">
        <img
          src={
            image
              ? image
              : 'https://images.unsplash.com/photo-1473167052083-3d31fa1f6776?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQwNzU4ODl8&ixlib=rb-4.0.3&q=85'
          }
          alt="Insurance Image"
        />
        <div className="m-insuranceCard__imgBlur">Buy</div>
      </div>
      <h2 className="m-insuranceCard__title">{name ? name : 'Insurance'}</h2>
      <p className="m-insuranceCard__text">{price ? price : '0'} ¥</p>
    </a>
  );
};

export default InsuranceCard;
