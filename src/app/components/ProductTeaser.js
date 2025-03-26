"use client";
import ProductGrid from "./ProductGrid";

const ProductTeaser = ({ selectedCategory }) => {
    return <ProductGrid selectedCategory={selectedCategory} showBackButton={false} showMoreButton={true} />;
};

export default ProductTeaser;