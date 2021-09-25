import {CarType, CarInfo} from './../Model/CarModel';
import marutiBaleno from './../Images/Maruti_Baleno.png';
import hyundaiI20 from './../Images/Hyundai_i20.png';
import marutiSwift from './../Images/Maruti_Swift.png';
import tataAltroz from './../Images/Tata_Altroz.png';

export const carsList : CarInfo[] = [
    {name : 'Maruti Baleno', price : 'Rs. 5.99 - 9.45 Lakh*', type : CarType.Hatchback, image : marutiBaleno},
    {name : 'Hyundai i20', price : 'Rs. 6.91 - 11.40 Lakh*', type : CarType.Hatchback, image : hyundaiI20},
    {name : 'Tata Altroz', price : 'Rs. 5.84 - 9.59 Lakh*', type : CarType.Hatchback, image : tataAltroz},
    {name : 'Maruti Swift', price : 'Rs. 5.85 - 8.67 Lakh*', type : CarType.Hatchback, image : marutiSwift},
    // {name : 'Tata Tiago', price : 'Rs. 4.99 - 7.04 Lakh*', type : CarType.Hatchback},
    // {name : 'Maruti Wagon R', price : 'Rs. 4.93 - 6.45 Lakh*', type : CarType.Hatchback},
    // {name : 'Scoda Rapid', price : 'Rs. 7.99 - 13.45 Lakh*', type : CarType.Sedan},
    // {name : 'Honda City 4th Gen', price : 'Rs. 9.29 - 9.99 Lakh*', type : CarType.Sedan},
    // {name : 'Maruti DZire', price : 'Rs. 5.99 - 9.08 Lakh*', type : CarType.Sedan},
    // {name : 'Hyundai Verna', price : 'Rs. 9.29 - 15.32 Lakh*', type : CarType.Sedan},
    // {name : 'Mahindra XUV700', price : 'Rs. 11.99 - 14.92 Lakh*', type : CarType.SUV},
    // {name : 'Mahindra Thar', price : 'Rs. 12.99 - 14.92 Lakh*', type : CarType.SUV},
    // {name : 'Hyundai Creta', price : 'Rs. 10.99 - 14.92 Lakh*', type : CarType.SUV},
    // {name : 'Kia Seltos', price : 'Rs. 9.99 - 14.92 Lakh*', type : CarType.SUV},
]