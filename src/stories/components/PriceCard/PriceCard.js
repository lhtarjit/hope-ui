import React from "react";
import "./PriceCard.css";
import "../Button/Button.css";

function PriceCard(props) {
  const {
    price,
    plan,
    feature1,
    feature2,
    feature3,
    feature4,
    variant = "primary",
    children,
    ...rest
  } = props;

  return (
    <div className="pricecard-container">
      <div className="price-container">
        <text className="price">{price}</text>
        <text className="price-month">/mo</text>
      </div>
      <text className="plan">{plan}</text>
      <div className="features">
        <div>{feature1}</div>
        <div>{feature2}</div>
        <div>{feature3}</div>
        <div>{feature4}</div>
      </div>
      <button className={`button ${variant}`} {...rest}>
        {children}
      </button>{" "}
    </div>
  );
}

export default PriceCard;
