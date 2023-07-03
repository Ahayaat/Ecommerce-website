import ProductCard from "@/components/ProductCard";
import { Products } from "@/utils/mock";
import { StaticImageData } from "next/image";

const ProductList = () => {
  const productsChecks = Products.slice(0, 3);
  return (
    <div className="flex justify-evenly mt-16 py-10">
      {productsChecks.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
          img={product.image as StaticImageData}
          category={product.category}
          id={product.id}
        />
      ))}
      {/* <ProductCard title="abc" price={200} img={pic1} />
      <ProductCard title="def" price={500} img={pic2} />
      <ProductCard title="ghk" price={900} img={pic3} /> */}
    </div>
  );
};

export default ProductList;
