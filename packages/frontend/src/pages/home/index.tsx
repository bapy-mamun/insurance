import React from "react";
import "./index.scss";
import { Heading } from "../../components/atoms/heading";
import InsuranceCard from "../../components/molecules/insurance-card";
import { Button } from "../../components/atoms/button";

const Home: React.FC = () => {
  return (
    <div className="p-home">
      <div className="p-home__sectionHeading">
        <Heading>Insurance List</Heading>
      </div>
      <div className="p-home__insuranceListContainer">
        <InsuranceCard></InsuranceCard>
        <InsuranceCard></InsuranceCard>
        <InsuranceCard></InsuranceCard>
      </div>
      <div className="p-home__buyInsuranceButton">
        <Button>Buy Insurance</Button>
      </div>
    </div>
  );
};

export default Home;
