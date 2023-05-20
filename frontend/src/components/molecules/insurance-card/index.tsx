import React from "react";
import "./index.scss";

interface InsuranceCardProps {
  image?: string;
  title?: string;
  desc?: string;
}

const InsuranceCard = ({
  image,
  title,
  desc,
}: InsuranceCardProps) => {
  return (
    <article className="m-insuranceCard">
      <div className="m-insuranceCard__imgBox">
        <img
          src={
            image
              ? image
              : "https://images.unsplash.com/photo-1473167052083-3d31fa1f6776?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQwNzU4ODl8&ixlib=rb-4.0.3&q=85"
          }
          alt="Insurance Image"
        />
        <div className="m-insuranceCard__imgBlur">
          <a href="#">Explore</a>
        </div>
      </div>
      <h2 className="m-insuranceCard__title">
        <a href="#">{title ? title : "Insurance"}</a>
      </h2>
      <p className="m-insuranceCard__text">
        {desc
          ? desc
          : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae. Lorem"}
      </p>
    </article>
  );
};

export default InsuranceCard;
