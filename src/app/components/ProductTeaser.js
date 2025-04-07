"use client";
import ProductGrid from "./ProductGrid";

// shown in the home component
// showBackButton false in teaser view and showMoreButton true to trigger the product list page
const ProductTeaser = ({ selectedCategory }) => {
    return <ProductGrid selectedCategory={selectedCategory} showBackButton={false} showMoreButton={true} />;
};

export default ProductTeaser;