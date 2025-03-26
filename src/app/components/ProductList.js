"use client";

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ selectedCategory }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const url = selectedCategory
                    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
                    : 'https://fakestoreapi.com/products';
                const response = await fetch(url);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error loading products:', error);
            }
            setLoading(false);
        };

        fetchProducts();
    }, [selectedCategory]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="bg-gray-100 p-8">
            <h3 className="text-xl font-bold text-center mb-6">{selectedCategory}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-6 mb-24">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
