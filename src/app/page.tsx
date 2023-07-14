import Footer from "@/views/Footer";
import Hero from "@/views/Hero";
import Jewellery from "@/views/Jewellery";
import Newslatter from "@/views/Newslatter";
import ProductList from "@/views/ProductList";
import ProductType from "@/views/ProductType";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import ProductCard from "./ProductCard";
import StripeCheckOutButton from "./CheckOut";

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    price,
      title,
      _id,
      image,
      category -> {
        name
      }
  }`);
  return res;
};

interface IProduct {
  title: string;
  _id: string;
  description: string;
  image: IImage;
  price: number;
  category: {
    name: string;
  };
}

export default async function Home() {
  const data: IProduct[] = await getProductData();

  return (
    <div>
      {/* <Hero />
      <ProductType />
      <ProductList />
      <Jewellery />
      <Newslatter />
      <Footer />
      {data.map((item) => (
        <div key={item._id}>
          <ProductCard item={item} /> */}
      <div>Stripe Check Out</div>
      <StripeCheckOutButton />
      {/* </div>
      ))} */}
    </div>
  );
}
