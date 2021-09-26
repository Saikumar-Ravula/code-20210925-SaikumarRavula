import { CarType, CarInfo } from "./../Model/CarModel";
import marutiBaleno from "./../Images/Maruti_Baleno.png";
import hyundaiI20 from "./../Images/Hyundai_i20.png";
import marutiSwift from "./../Images/Maruti_Swift.png";
import tataAltroz from "./../Images/Tata_Altroz.png";
import creta from "./../Images/Creta.png";
import hondaCity from "./../Images/HondaCity.png";
import kia from "./../Images/Kia.png";
import mahindra from "./../Images/Mahindra.png";
import marutiDzire from "./../Images/Maruti_DZire.png";
import skoda from "./../Images/Skoda.png";
import thar from "./../Images/Thar.png";
import verna from "./../Images/Verna.png";

export const carsList: CarInfo[] = [
  {
    name: "Maruti Baleno",
    price: "Rs. 5.99 - 9.45 Lakh*",
    type: CarType.Hatchback,
    image: marutiBaleno,
  },
  {
    name: "Hyundai i20",
    price: "Rs. 6.91 - 11.40 Lakh*",
    type: CarType.Hatchback,
    image: hyundaiI20,
  },
  {
    name: "Tata Altroz",
    price: "Rs. 5.84 - 9.59 Lakh*",
    type: CarType.Hatchback,
    image: tataAltroz,
  },
  {
    name: "Maruti Swift",
    price: "Rs. 5.85 - 8.67 Lakh*",
    type: CarType.Hatchback,
    image: marutiSwift,
  },
  {
    name: "Scoda Rapid",
    price: "Rs. 7.99 - 13.45 Lakh*",
    type: CarType.Sedan,
    image: skoda,
  },
  {
    name: "Honda City 4th Gen",
    price: "Rs. 9.29 - 9.99 Lakh*",
    type: CarType.Sedan,
    image: hondaCity,
  },
  {
    name: "Maruti DZire",
    price: "Rs. 5.99 - 9.08 Lakh*",
    type: CarType.Sedan,
    image: marutiDzire,
  },
  {
    name: "Hyundai Verna",
    price: "Rs. 9.29 - 15.32 Lakh*",
    type: CarType.Sedan,
    image: verna,
  },
  {
    name: "Mahindra XUV700",
    price: "Rs. 11.99 - 14.92 Lakh*",
    type: CarType.SUV,
    image: mahindra,
  },
  {
    name: "Mahindra Thar",
    price: "Rs. 12.99 - 14.92 Lakh*",
    type: CarType.SUV,
    image: thar,
  },
  {
    name: "Hyundai Creta",
    price: "Rs. 10.99 - 14.92 Lakh*",
    type: CarType.SUV,
    image: creta,
  },
  {
    name: "Kia Seltos",
    price: "Rs. 9.99 - 14.92 Lakh*",
    type: CarType.SUV,
    image: kia,
  },
];
