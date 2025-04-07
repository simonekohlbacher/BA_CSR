"use client";
import ProductGrid from "./ProductGrid";

// shown in the product list page
// showBackButton true in list view and showMoreButton false
const ProductList = ({ selectedCategory }) => {
    return <ProductGrid selectedCategory={selectedCategory} showBackButton={true} showMoreButton={false} />;
};

export default ProductList;
