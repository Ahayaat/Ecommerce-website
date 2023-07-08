"use client";
import { oneProductType } from "@/utils/ProductDataArrayType";
import { FC } from "react";
import Card from "./Card";

const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({
  ProductData,
}) => {
  return (
    <div className="flex">
      {ProductData.map((item: oneProductType, index: number) => (
        <Card key={index + 4} singleProductData={item} />
      ))}
    </div>
  );
};

export default ProductCarousel;
