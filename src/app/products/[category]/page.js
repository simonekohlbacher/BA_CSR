"use client";

import { useEffect, useState } from "react";
import ProductList from "../../components/ProductList";
import { useParams } from "next/navigation";

export default function ProductCategoryPage() {
    const { category } = useParams();  // useParams statt getServerSideProps
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            if (!category) return;
            setLoading(true);
            try {
                const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
            setLoading(false);
        };

        fetchProducts();
    }, [category]);

    return (
        <div>
            <h1 className="text-2xl font-bold text-center m-12">Produkte in {category}</h1>
            {loading ? <p>Lädt...</p> : <ProductList selectedCategory={category} products={products} />}
        </div>
    );
}
