import { defineField } from "sanity";

export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
    },
    {
      name: "discription",
      title: "Product Discription",
      type: "string",
    },
    {
      name: "productTypes",
      type: "array",
      title: "ProductType",
      of: [{ type: "string" }],
    },
    {
      name: "price",
      title: "Product Price",
      type: "number",
    },
    {
      name: "image",
      title: "Product Image",
      type: "array",
      of: [
        {
          name: "img",
          title: "Image",
          type: "image",
        },
      ],
    },
    {
      name: "size",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
    },

    defineField({
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    }),
  ],
};
