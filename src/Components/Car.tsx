import React from "react";
import { CarInfo } from "./../Model/CarModel";

import "./../Styles/CarStyles.css";

const Car: React.FC<CarInfo> = (eachCar: CarInfo) => {
  return (
    <div className="outerDiv">
      <div className="carImageDiv">
        <img className="carImage" src={eachCar.image} alt="Hyundai i20" />
      </div>
      <div className="carLabelDiv">
        <label className="carLabel">{eachCar.name}</label>
        <label className="carLabel">{eachCar.price}</label>
      </div>
    </div>
  );
};

export default Car;
