import iPhone1 from "../assets/iphone.webp";
import iPhone2 from "../assets/iphone2.webp";
import iPhone3 from "../assets/iphone3.webp";
import Samsung1 from "../assets/samsung.webp";
import Samsung2 from "../assets/samsung2.webp";
import Samsung3 from "../assets/samsung3.webp";
import Xiaomi1 from "../assets/xiaomi.webp";
import Xiaomi2 from "../assets/xiaomi2.webp";
import Xiaomi3 from "../assets/xiaomi3.webp";
import Huawei1 from "../assets/huawei.webp";
import Huawei2 from "../assets/huawei2.webp";
import Huawei3 from "../assets/huawei3.webp";


interface PhoneItem {
  id: number;
  name: string;
  color: string;
  storage: number;
  price: number;
  brand: string;
  mainImg: string;
  extraImg: string[];
}


const allItems: PhoneItem[] = [
  {
    id: 1,
    name: "IPhone 15",
    color: "black",
    storage: 128,
    price: 249990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 2,
    name: "IPhone 15",
    color: "black",
    storage: 256,
    price: 325990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 3,
    name: "IPhone 15",
    color: "black",
    storage: 512,
    price: 449990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 4,
    name: "IPhone 15",
    color: "white",
    storage: 128,
    price: 249990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 5,
    name: "IPhone 15",
    color: "white",
    storage: 256,
    price: 325990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 6,
    name: "IPhone 15",
    color: "white",
    storage: 512,
    price: 449990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 7,
    name: "IPhone 15",
    color: "gold",
    storage: 128,
    price: 249990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 8,
    name: "IPhone 15",
    color: "gold",
    storage: 256,
    price: 325990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 9,
    name: "IPhone 15",
    color: "gold",
    storage: 512,
    price: 449990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 10,
    name: "IPhone 15",
    color: "red",
    storage: 128,
    price: 249990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 11,
    name: "IPhone 15",
    color: "red",
    storage: 256,
    price: 325990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 12,
    name: "IPhone 15",
    color: "red",
    storage: 512,
    price: 449990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 13,
    name: "IPhone 15 Plus",
    color: "black",
    storage: 128,
    price: 249990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 14,
    name: "IPhone 15 Plus",
    color: "black",
    storage: 256,
    price: 325990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 15,
    name: "IPhone 15 Plus",
    color: "black",
    storage: 512,
    price: 449990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 16,
    name: "IPhone 15 Plus",
    color: "white",
    storage: 128,
    price: 249990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 17,
    name: "IPhone 15 Plus",
    color: "white",
    storage: 256,
    price: 325990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 18,
    name: "IPhone 15 Plus",
    color: "white",
    storage: 512,
    price: 449990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 19,
    name: "IPhone 15 Plus",
    color: "gold",
    storage: 128,
    price: 249990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 20,
    name: "IPhone 15 Plus",
    color: "gold",
    storage: 256,
    price: 325990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 21,
    name: "IPhone 15 Plus",
    color: "gold",
    storage: 512,
    price: 449990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 22,
    name: "IPhone 15 Plus",
    color: "red",
    storage: 128,
    price: 249990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 23,
    name: "IPhone 15 Plus",
    color: "red",
    storage: 256,
    price: 325990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 24,
    name: "IPhone 15 Plus",
    color: "red",
    storage: 512,
    price: 449990,
    brand: "iphone",
    mainImg: iPhone1,
    extraImg: [iPhone2, iPhone3],
  },
  {
    id: 25,
    name: "Samsung Galaxy S22",
    color: "black",
    storage: 128,
    price: 249990,
    brand: "samsung",
    mainImg: Samsung1,
    extraImg: [Samsung2, Samsung3],
  },
  {
    id: 26,
    name: "Samsung Galaxy S22",
    color: "black",
    storage: 256,
    price: 325990,
    brand: "samsung",
    mainImg: Samsung1,
    extraImg: [Samsung2, Samsung3],
  },
  {
    id: 27,
    name: "Samsung Galaxy S22",
    color: "black",
    storage: 512,
    price: 449990,
    brand: "samsung",
    mainImg: Samsung1,
    extraImg: [Samsung2, Samsung3],
  },
  {
    id: 28,
    name: "Samsung Galaxy S22",
    color: "white",
    storage: 128,
    price: 249990,
    brand: "samsung",
    mainImg: Samsung1,
    extraImg: [Samsung2, Samsung3],
  },
  {
    id: 29,
    name: "Samsung Galaxy S22",
    color: "white",
    storage: 256,
    price: 325990,
    brand: "samsung",
    mainImg: Samsung1,
    extraImg: [Samsung2, Samsung3],
  },
  {
    id: 30,
    name: "Samsung Galaxy S22",
    color: "white",
    storage: 512,
    price: 449990,
    brand: "samsung",
    mainImg: Samsung1,
    extraImg: [Samsung2, Samsung3],
  },
  {
    id: 31,
    name: "Samsung Galaxy S22",
    color: "gold",
    storage: 128,
    price: 249990,
    brand: "samsung",
    mainImg: Samsung1,
    extraImg: [Samsung2, Samsung3],
  },
  {
    id: 32,
    name: "Samsung Galaxy S22",
    color: "gold",
    storage: 256,
    price: 325990,
    brand: "samsung",
    mainImg: Samsung1,
    extraImg: [Samsung2, Samsung3],
  },
  {
    id: 33,
    name: "Samsung Galaxy S22",
    color: "gold",
    storage: 512,
    price: 449990,
    brand: "samsung",
    mainImg: Samsung1,
    extraImg: [Samsung2, Samsung3],
  },
  {
    id: 34,
    name: "Samsung Galaxy S22",
    color: "red",
    storage: 128,
    price: 249990,
    brand: "samsung",
    mainImg: Samsung1,
    extraImg: [Samsung2, Samsung3],
  },
  {
    id: 35,
    name: "Samsung Galaxy S22",
    color: "red",
    storage: 256,
    price: 325990,
    brand: "samsung",
    mainImg: Samsung1,
    extraImg: [Samsung2, Samsung3],
  },
  {
    id: 36,
    name: "Samsung Galaxy S22",
    color: "red",
    storage: 512,
    price: 449990,
    brand: "samsung",
    mainImg: Samsung1,
    extraImg: [Samsung2, Samsung3],
  },
  {
    id: 37,
    name: "Huawei P50",
    color: "black",
    storage: 128,
    price: 249990,
    brand: "huawei",
    mainImg: Huawei1, // Replace 'Huawei1' with the actual image path
    extraImg: [Huawei2, Huawei3], // Replace 'Huawei2' and 'Huawei3' with actual image paths
  },
  {
    id: 38,
    name: "Huawei P50",
    color: "black",
    storage: 256,
    price: 325990,
    brand: "huawei",
    mainImg: Huawei1, // Replace 'Huawei1' with the actual image path
    extraImg: [Huawei2, Huawei3], // Replace 'Huawei2' and 'Huawei3' with actual image paths
  },
  {
    id: 39,
    name: "Huawei P50",
    color: "black",
    storage: 512,
    price: 449990,
    brand: "huawei",
    mainImg: Huawei1, // Replace 'Huawei1' with the actual image path
    extraImg: [Huawei2, Huawei3], // Replace 'Huawei2' and 'Huawei3' with actual image paths
  },
  {
    id: 40,
    name: "Huawei P50",
    color: "white",
    storage: 128,
    price: 249990,
    brand: "huawei",
    mainImg: Huawei1, // Replace 'Huawei1' with the actual image path
    extraImg: [Huawei2, Huawei3], // Replace 'Huawei2' and 'Huawei3' with actual image paths
  },
  {
    id: 41,
    name: "Huawei P50",
    color: "white",
    storage: 256,
    price: 325990,
    brand: "huawei",
    mainImg: Huawei1, // Replace 'Huawei1' with the actual image path
    extraImg: [Huawei2, Huawei3], // Replace 'Huawei2' and 'Huawei3' with actual image paths
  },
  {
    id: 42,
    name: "Huawei P50",
    color: "white",
    storage: 512,
    price: 449990,
    brand: "huawei",
    mainImg: Huawei1, // Replace 'Huawei1' with the actual image path
    extraImg: [Huawei2, Huawei3], // Replace 'Huawei2' and 'Huawei3' with actual image paths
  },
  {
    id: 43,
    name: "Huawei P50",
    color: "gold",
    storage: 128,
    price: 249990,
    brand: "huawei",
    mainImg: Huawei1, // Replace 'Huawei1' with the actual image path
    extraImg: [Huawei2, Huawei3], // Replace 'Huawei2' and 'Huawei3' with actual image paths
  },
  {
    id: 44,
    name: "Huawei P50",
    color: "gold",
    storage: 256,
    price: 325990,
    brand: "huawei",
    mainImg: Huawei1, // Replace 'Huawei1' with the actual image path
    extraImg: [Huawei2, Huawei3], // Replace 'Huawei2' and 'Huawei3' with actual image paths
  },
  {
    id: 45,
    name: "Huawei P50",
    color: "gold",
    storage: 512,
    price: 449990,
    brand: "huawei",
    mainImg: Huawei1, // Replace 'Huawei1' with the actual image path
    extraImg: [Huawei2, Huawei3], // Replace 'Huawei2' and 'Huawei3' with actual image paths
  },
  {
    id: 46,
    name: "Huawei P50",
    color: "red",
    storage: 128,
    price: 249990,
    brand: "huawei",
    mainImg: Huawei1, // Replace 'Huawei1' with the actual image path
    extraImg: [Huawei2, Huawei3], // Replace 'Huawei2' and 'Huawei3' with actual image paths
  },
  {
    id: 47,
    name: "Huawei P50",
    color: "red",
    storage: 256,
    price: 325990,
    brand: "huawei",
    mainImg: Huawei1, // Replace 'Huawei1' with the actual image path
    extraImg: [Huawei2, Huawei3], // Replace 'Huawei2' and 'Huawei3' with actual image paths
  },
  {
    id: 48,
    name: "Huawei P50",
    color: "red",
    storage: 512,
    price: 449990,
    brand: "huawei",
    mainImg: Huawei1, // Replace 'Huawei1' with the actual image path
    extraImg: [Huawei2, Huawei3], // Replace 'Huawei2' and 'Huawei3' with actual image paths
  },
  {
    id: 49,
    name: "Xiaomi Mi 12",
    color: "black",
    storage: 128,
    price: 249990,
    brand: "xiaomi",
    mainImg: Xiaomi1, // Replace 'Xiaomi1' with the actual image path
    extraImg: [Xiaomi2, Xiaomi3], // Replace 'Xiaomi2' and 'Xiaomi3' with actual image paths
  },
  {
    id: 50,
    name: "Xiaomi Mi 12",
    color: "black",
    storage: 256,
    price: 325990,
    brand: "xiaomi",
    mainImg: Xiaomi1, // Replace 'Xiaomi1' with the actual image path
    extraImg: [Xiaomi2, Xiaomi3], // Replace 'Xiaomi2' and 'Xiaomi3' with actual image paths
  },
  {
    id: 51,
    name: "Xiaomi Mi 12",
    color: "black",
    storage: 512,
    price: 449990,
    brand: "xiaomi",
    mainImg: Xiaomi1, // Replace 'Xiaomi1' with the actual image path
    extraImg: [Xiaomi2, Xiaomi3], // Replace 'Xiaomi2' and 'Xiaomi3' with actual image paths
  },
  {
    id: 52,
    name: "Xiaomi Mi 12",
    color: "white",
    storage: 128,
    price: 249990,
    brand: "xiaomi",
    mainImg: Xiaomi1, // Replace 'Xiaomi1' with the actual image path
    extraImg: [Xiaomi2, Xiaomi3], // Replace 'Xiaomi2' and 'Xiaomi3' with actual image paths
  },
  {
    id: 53,
    name: "Xiaomi Mi 12",
    color: "white",
    storage: 256,
    price: 325990,
    brand: "xiaomi",
    mainImg: Xiaomi1, // Replace 'Xiaomi1' with the actual image path
    extraImg: [Xiaomi2, Xiaomi3], // Replace 'Xiaomi2' and 'Xiaomi3' with actual image paths
  },
  {
    id: 54,
    name: "Xiaomi Mi 12",
    color: "white",
    storage: 512,
    price: 449990,
    brand: "xiaomi",
    mainImg: Xiaomi1, // Replace 'Xiaomi1' with the actual image path
    extraImg: [Xiaomi2, Xiaomi3], // Replace 'Xiaomi2' and 'Xiaomi3' with actual image paths
  },
  {
    id: 55,
    name: "Xiaomi Mi 12",
    color: "gold",
    storage: 128,
    price: 249990,
    brand: "xiaomi",
    mainImg: Xiaomi1, // Replace 'Xiaomi1' with the actual image path
    extraImg: [Xiaomi2, Xiaomi3], // Replace 'Xiaomi2' and 'Xiaomi3' with actual image paths
  },
  {
    id: 56,
    name: "Xiaomi Mi 12",
    color: "gold",
    storage: 256,
    price: 325990,
    brand: "xiaomi",
    mainImg: Xiaomi1, // Replace 'Xiaomi1' with the actual image path
    extraImg: [Xiaomi2, Xiaomi3], // Replace 'Xiaomi2' and 'Xiaomi3' with actual image paths
  },
  {
    id: 57,
    name: "Xiaomi Mi 12",
    color: "gold",
    storage: 512,
    price: 449990,
    brand: "xiaomi",
    mainImg: Xiaomi1, // Replace 'Xiaomi1' with the actual image path
    extraImg: [Xiaomi2, Xiaomi3], // Replace 'Xiaomi2' and 'Xiaomi3' with actual image paths
  },
  {
    id: 58,
    name: "Xiaomi Mi 12",
    color: "red",
    storage: 128,
    price: 249990,
    brand: "xiaomi",
    mainImg: Xiaomi1, // Replace 'Xiaomi1' with the actual image path
    extraImg: [Xiaomi2, Xiaomi3], // Replace 'Xiaomi2' and 'Xiaomi3' with actual image paths
  },
  {
    id: 59,
    name: "Xiaomi Mi 12",
    color: "red",
    storage: 256,
    price: 325990,
    brand: "xiaomi",
    mainImg: Xiaomi1, // Replace 'Xiaomi1' with the actual image path
    extraImg: [Xiaomi2, Xiaomi3], // Replace 'Xiaomi2' and 'Xiaomi3' with actual image paths
  },
  {
    id: 60,
    name: "Xiaomi Mi 12",
    color: "red",
    storage: 512,
    price: 449990,
    brand: "xiaomi",
    mainImg: Xiaomi1, // Replace 'Xiaomi1' with the actual image path
    extraImg: [Xiaomi2, Xiaomi3], // Replace 'Xiaomi2' and 'Xiaomi3' with actual image paths
  },
];

export default allItems;
