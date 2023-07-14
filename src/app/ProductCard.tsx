"use client";

import Image from "next/image";
import { urlForImage } from "sanity/lib/image";
import { FC } from "react";

const ProductCard: FC<{ item: any }> = ({ item }) => {
  const handleAddToCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: item._id,
      }),
    });
    const result = await res.json();
    console.log(result);
  };
  return (
    <>
      {/* <Image
            width={300}
            height={300}
            src={urlForImage(item.image).url()}
            alt="product"
          /> */}
      <h2>{item.title}</h2>
      <h3>{item.price}</h3>
      <button
        onClick={handleAddToCart}
        className="border py-2 px-6 rounded bg-blue-600 text-white"
      >
        Add To Cart
      </button>
    </>
  );
};

export default ProductCard;
