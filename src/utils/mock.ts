import { Product } from "./types";
import P5 from "/public/p5.png";
import P2 from "/public/p2.webp";
import P3 from "/public/p3.png";
import P4 from "/public/p4.png";

export const Products: Product[] = [
  {
    id: 1,
    name: "Brushed Raglan Sweatshirt",
    category: "female",
    tagline: "Sweater",
    price: 195,
    image: P2,
  },
  {
    id: 2,
    name: "Cameryn Sash Tie Dress",
    category: "female",
    tagline: "Dress",
    price: 545,
    image: P3,
  },
  {
    id: 3,
    name: "Flex Sweatshirt",
    category: "female",
    tagline: "Sweater",
    price: 175,
    image: P4,
  },
  {
    id: 4,
    name: "Flex Sweatpants",
    category: "female",
    tagline: "Pants",
    price: 175,
    image: P5,
  },
];
