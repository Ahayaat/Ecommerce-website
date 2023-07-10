import Footer from "@/views/Footer";
import Hero from "@/views/Hero";
import Jewellery from "@/views/Jewellery";
import Newslatter from "@/views/Newslatter";
import ProductList from "@/views/ProductList";
import ProductType from "@/views/ProductType";

export default async function Home() {
  return (
    <div>
      <Hero />
      <ProductType />
      <ProductList />
      <Jewellery />
      <Newslatter />
      <Footer />
    </div>
  );
}
