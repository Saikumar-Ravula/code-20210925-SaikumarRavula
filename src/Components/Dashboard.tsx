import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Car from "./Car";
import { carsList } from "./../Data/CarsList";
import "./../Styles/DashboardStyles.css";
import { CarType } from "../Model/CarModel";

const Dashboard = () => {
  return (
    <div className="dashboardDiv">
      <Tabs>
        <TabList className="react-tabs-list">
          <Tab className="tab-header">
            <label className="tab-label">Hatchback</label>
          </Tab>
          <Tab className="tab-header">
            <label className="tab-label">Sedan</label>
          </Tab>
          <Tab className="tab-header">
            <label className="tab-label">SUV</label>
          </Tab>
        </TabList>
        <TabPanel>
          <div className="carListDiv">
            {carsList.filter(car => car.type === CarType.Hatchback).map((eachCarInfo) => {
              return (
                <Car
                  key={eachCarInfo.name}
                  type={eachCarInfo.type}
                  name={eachCarInfo.name}
                  image={eachCarInfo.image}
                  price={eachCarInfo.price}
                />
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="carListDiv">
            {carsList.filter(car => car.type === CarType.Sedan).map((eachCarInfo) => {
              return (
                <Car
                  key={eachCarInfo.name}
                  type={eachCarInfo.type}
                  name={eachCarInfo.name}
                  image={eachCarInfo.image}
                  price={eachCarInfo.price}
                />
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="carListDiv">
            {carsList.filter(car => car.type === CarType.SUV).map((eachCarInfo) => {
              return (
                <Car
                  key={eachCarInfo.name}
                  type={eachCarInfo.type}
                  name={eachCarInfo.name}
                  image={eachCarInfo.image}
                  price={eachCarInfo.price}
                />
              );
            })}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
