// ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, imageSrc: "https://placehold.co/280", title: "Product", originalPrice: "100,000 vnd", discountedPrice: "80,000 vnd", hasSale: false },
  { id: 2, imageSrc: "https://placehold.co/280", title: "Product", originalPrice: "100,000 vnd", discountedPrice: "80,000 vnd", hasSale: false },
  { id: 3, imageSrc: "https://placehold.co/280", title: "Product", originalPrice: "100,000 vnd", discountedPrice: "80,000 vnd", hasSale: false },
  { id: 4, imageSrc: "https://placehold.co/280", title: "Product", originalPrice: "100,000 vnd", discountedPrice: "80,000 vnd", hasSale: true }
];

const ProductList = () => (
  <div className="container my-5">
    <h2 className="">NEW PRODUCT</h2>
    <p className="">List product description</p>
    <div className="row">
      {products.map(product => (
        <ProductCard
          key={product.id}
          imageSrc={product.imageSrc}
          title={product.title}
          originalPrice={product.originalPrice}
          discountedPrice={product.discountedPrice}
          hasSale={product.hasSale}
        />
      ))}
    </div>
  </div>
);

export default ProductList;
