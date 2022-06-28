import { v4 as uuid } from "uuid";
import rolex1 from "../../assets/rolex2.jpg";
import rolex2 from "../../assets/rolex5.jpg";
import rolex5 from "../../assets/rolex18.jpg";
import rolex6 from "../../assets/rolex19.jpg";
import rolex7 from "../../assets/rolex20.jpg";
import rolex8 from "../../assets/rolex21.jpg";
import rolex9 from "../../assets/rolex22.jpg";
import rolex10 from "../../assets/rolex23.jpg";
import rolex11 from "../../assets/rolex16.jpg";
import rolex12 from "../../assets/rolex17.jpg";
import rolex13 from "../../assets/rolex14.jpg";
import rolex14 from "../../assets/rolex15.jpg";
import rolex15 from "../../assets/rolex13.jpg";
import rolex16 from "../../assets/rolex12.jpg";
import rolex17 from "../../assets/rolex11.jpg";
import rolex18 from "../../assets/rolex10.jpg";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    id: uuid(),
    Image: rolex8,
    Brand: "AIR-KING",
    price: 1599,
    rating: "3" ,
    delivery: true,
    stock: false,
    discount:1699

  },
  {
    id: uuid(),
    Image: rolex9,
    Brand: "DATE-JUST",
    price: 1200,
    rating: "1" ,
    delivery: true,
    stock: false,
    discount:1399


  },
  {
    id: uuid(),
    Image: rolex10,
    Brand: "OYSTER",
    price: 1199,
    rating: "2" ,
    delivery: true,
    stock: true,
    discount:1299


  },
  {
    id: uuid(),
    Image: rolex1,
    Brand: "AIR-KING",
    price: 1399,
    rating: "4.5" ,
    delivery: true,
    stock: true,
    discount:1499

  },
  {
    id: uuid(),
    Image: rolex2,
    Brand: "GMT-MASTER",
    price: 999,
    rating: "5" ,
    delivery: true,
    stock: true,
    discount:1199


  },
  {
    id: uuid(),
    Image: rolex5,
    Brand: "YACHT-MASTER",
    price: 1000,
    rating: "5" ,
    delivery: false,
    stock: false,
    discount:1299

  },
  {
    id: uuid(),
    Image: rolex11,
    Brand: "DAY-DATE",
    price: 1200,
    rating: "2" ,
    delivery: false,
    stock: true,
    discount:1399


  },
  {
    id: uuid(),
    Image: rolex12,
    Brand: "DIAMOND",
    price: 1299,
    rating: "2.1" ,
    delivery: false,
    stock: false,
    discount:1399


    
  },
  {
    id: uuid(),
    Image: rolex13,
    Brand: "YACHT-MASTER",
    price: 500,
    rating: "4.5" ,
    delivery: true,
    stock: false,
    discount:700
  },
  {
    id: uuid(),
    Image: rolex6,
    Brand: "SEA-DWELLER",
    price: 599,
    rating: "5" ,
    delivery: false,
    stock: true,
    discount:799

  },
  {
    id: uuid(),
    Image: rolex14,
    Brand: "SEA-DWELLER",
    price: 899,
    rating: "5" ,
    delivery: true,
    stock: false,
    discount:999

  },
 
  {
    id: uuid(),
    Image: rolex15,
    Brand: "SEA-DWELLER",
    price: 1549,
    rating: "3.8" ,
    delivery: true,
    stock: false,
    discount:1699

  },


  {
    id: uuid(),
    Image: rolex7,
    Brand: "MILGAUSS",
    price: 1519,
    rating: "3" ,
    delivery: true,
    stock: true,
    discount:1699

  },
  {
    id: uuid(),
    Image: rolex16,
    Brand: "MILGAUSS",
    price: 1519,
    rating: "3" ,
    delivery: true,
    stock: true,
    discount:1649
  },
  {
    id: uuid(),
    Image: rolex17,
    Brand: "MILGAUSS",
    price: 1519,
    rating: "3" ,
    delivery: true,
    stock: true,
    discount:1599

  },
  {
    id: uuid(),
    Image: rolex18,
    Brand: "MILGAUSS",
    price: 1519,
    rating: "3" ,
    delivery: true,
    stock: true,
    discount:1649
  },  
];
