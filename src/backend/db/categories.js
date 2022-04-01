import { v4 as uuid } from "uuid";
// import watch1 from "../../assets/watch5.jpg";
import watch2 from "../../assets/watch6.jpg";
import watch3 from "../../assets/rolex5.jpg";
import watch4 from "../../assets/rolex7.jpg";
import watch5 from "../../assets/rolex10.jpg";
import watch6 from "../../assets/watch4.jpg";
import watch7 from "../../assets/watch7.jpg";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "DATE JUST",
    image:watch7
  },
  {
    _id: uuid(),
    categoryName: "OYSTER ",
    image:watch2
  },
  {
    _id: uuid(),
    categoryName: "DAY DATE",
    image:watch3
  },
  {
    _id: uuid(),
    categoryName: "GOLDEN",
    image:watch4
  },
  {
    _id: uuid(),
    categoryName: "SILVER",
    image:watch5
  },
  {
    _id: uuid(),
    categoryName: "DIAMOND",
    image:watch6
  }
];
