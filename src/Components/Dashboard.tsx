import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Car from "./Car";
import { carsList } from "./../Data/CarsList";
import "./../Styles/DashboardStyles.css";
import { CarType } from "../Model/CarModel";

const Dashboard = () => {
  const initialState = {
    selectedTab: CarType.Hatchback,
  };

  const [state, setState] = useState(initialState);

  return (
    <div className="dashboardDiv">
      <div className="centerDiv">
        <div className="searchedCars">
          <label>The most searched cars</label>
        </div>
        <Tabs>
          <TabList className="reactTabsList">
            <Tab
              className={
                state.selectedTab === CarType.Hatchback
                  ? "tabHeaderSelected"
                  : "tabHeaderNotSelected"
              }
              onClick={() =>
                setState({ ...state, selectedTab: CarType.Hatchback })
              }
            >
              <label className="tabLabel">Hatchback</label>
            </Tab>
            <Tab
              className={
                state.selectedTab === CarType.Sedan
                  ? "tabHeaderSelected"
                  : "tabHeaderNotSelected"
              }
              onClick={() => setState({ ...state, selectedTab: CarType.Sedan })}
            >
              <label className="tabLabel">Sedan</label>
            </Tab>
            <Tab
              className={
                state.selectedTab === CarType.SUV
                  ? "tabHeaderSelected"
                  : "tabHeaderNotSelected"
              }
              onClick={() => setState({ ...state, selectedTab: CarType.SUV })}
            >
              <label className="tabLabel">SUV</label>
            </Tab>
          </TabList>
          <TabPanel>
            <div className="carListDiv">
              {carsList
                .filter((car) => car.type === CarType.Hatchback)
                .map((eachCarInfo) => {
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
              {carsList
                .filter((car) => car.type === CarType.Sedan)
                .map((eachCarInfo) => {
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
              {carsList
                .filter((car) => car.type === CarType.SUV)
                .map((eachCarInfo) => {
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
    </div>
  );
};

export default Dashboard;
