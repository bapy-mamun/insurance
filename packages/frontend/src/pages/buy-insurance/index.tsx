import React, { useEffect, useState } from "react";
import "./index.scss";
import Form from "../../components/molecules/form";
import { InsuranceProduct } from "../../utils/types";

const BuyInsurance: React.FC = () => {
  const [formStep, setFormStep] = React.useState<"step1" | "step2">("step1");
  const [insuranceData, setInsuranceData] = useState<InsuranceProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8080/api/insuranceProducts"
      );
      const data = await response.json();
      console.log(data);
      setInsuranceData(data.insuranceProducts);
    };
    fetchData();
  }, []);

  const handleSubmit = () => {
    console.log('submit');
  };

  const handleNextPrevClick = () => {
    if (formStep === "step1") {
      setFormStep("step2");
    } else {
      setFormStep("step1");
    }
  };

  return (
    <div className="p-buyInsurance">
      {formStep === "step1" ? (
        <div className="p-buyInsurance__form">
          <Form />
        </div>
      ) : (
        <div className="p-buyInsurance__payementForm">
          <p>payement</p>
        </div>
      )}
      <div className="p-buyInsurance__payementForm">
        <button onClick={handleNextPrevClick}>
          {formStep === "step1" ? "Next" : "Previous"}
        </button>
        {formStep === "step2" ? <button onClick={handleSubmit}>Buy</button> : null}
      </div>
    </div>
  );
};

export default BuyInsurance;
