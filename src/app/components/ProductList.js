"use client";

import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
                console.log(data);
            })
            .catch(error => {
                console.error('Products could not be loaded', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center text-xl">Loading...</p>;
    }

    return (
        <div className="bg-gray-100 p-8">
            <h2 className="text-3xl font-bold text-center mb-6">Products</h2>
            <p className="text-xl text-center mb-12">Lorem ipsum</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-24">
                {products.map(product => (
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
