import { oneProductType } from "@/utils/ProductDataArrayType";
import React from "react";
import { FC } from "react";
import Image from "next/image";
import ImageUrlBuilder from "@sanity/image-url";
import { client } from "sanity/lib/client";

const builder = ImageUrlBuilder(client);

const Card: FC<{ singleProductData: oneProductType }> = ({
  singleProductData,
}) => {
  function urlFor(source: any) {
    return builder.image(source);
  }

  return (
    <div className="border-4">
      <div className="w-24">
        <Image
          width={500}
          height={500}
          src={urlFor(singleProductData.image[0]).width(500).height(500).url()}
          alt={singleProductData.image[0].alt}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Card;
