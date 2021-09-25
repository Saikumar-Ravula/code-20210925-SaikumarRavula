import React from 'react';
import Car from './Car';
import { carsList } from './../Data/CarsList';
import './../Styles/DashboardStyles.css'

const Dashboard = () => {
    return(
        <div className='dashboardDiv'>
            <div className='carListDiv'>
            {
            carsList.map(
              eachCarInfo => {
                  return(
                <Car 
                    key = {eachCarInfo.name}
                    type = {eachCarInfo.type}
                    name = {eachCarInfo.name}
                    image = {eachCarInfo.image}
                    price = {eachCarInfo.price}
                />
                  )
              }
            )
          }
        </div>
        </div>
    )
}

export default Dashboard;