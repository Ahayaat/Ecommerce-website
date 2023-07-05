import Image from "next/image";
import Hero from "@/views/Hero";
import ProductList from "@/views/ProductList";
import ProductType from "@/views/ProductType";
import BASE_PATH_FORAPI from "@/components/BasePath";
import ProductCarousel from "@/views/ProductCarousel";

async function fetchAllProductsData() {
  let res = await fetch(`${BASE_PATH_FORAPI}/api/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

export default async function Home() {
  let { response } = await fetchAllProductsData();
  return (
    <div>
      <Hero />
      <ProductType />
      <ProductCarousel ProductData={response} />
      {/* <ProductList /> */}
    </div>
  );
}
