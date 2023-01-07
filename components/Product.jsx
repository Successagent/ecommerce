import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product: { name, slug, price, image } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width="250px"
            height="250px"
            className="product-image"
            alt=""
          />
          <p className="product-name">{name}</p>
          <p className="product-price">N{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
