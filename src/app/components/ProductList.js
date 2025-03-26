"use client";
import ProductGrid from "./ProductGrid";

const ProductList = ({ selectedCategory }) => {
    return <ProductGrid selectedCategory={selectedCategory} showBackButton={true} showMoreButton={false} />;
};

export default ProductList;
