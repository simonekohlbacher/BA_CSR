import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]); // Speichert alle Produkte
    const [loading, setLoading] = useState(true); // Lädstatus

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();

                setProducts(data); // Setzt alle Produkte
            } catch (error) {
                console.error('Error loading products:', error);
            }
            setLoading(false);
        };

        fetchProducts();
    }, []); // Läuft nur einmal, wenn die Komponente geladen wird

    if (loading) {
        return <p className="text-center text-xl">Loading...</p>;
    }

    return (
        <div className="bg-gray-100 p-8">
            <h2 className="text-3xl font-bold text-center mb-6">Products</h2>
            <p className="text-xl text-center mb-12">Lorem ipsum</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-24">
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
