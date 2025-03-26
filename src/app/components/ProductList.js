import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]); // Speichert alle Produkte
    const [loading, setLoading] = useState(true); // Lädstatus
    const [currentPage, setCurrentPage] = useState(1); // Aktuelle Seite
    const [totalPages, setTotalPages] = useState(0); // Gesamtzahl der Seiten
    const productsPerPage = 9; // Anzahl der Produkte pro Seite

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();

                setProducts(data);
                setTotalPages(Math.ceil(data.length / productsPerPage)); // Berechnet die Gesamtzahl der Seiten
            } catch (error) {
                console.error('Error loading products:', error);
            }
            setLoading(false);
        };

        fetchProducts();
    }, []); // Läuft nur einmal, wenn die Komponente geladen wird

    // Paginierung: Nur die Produkte der aktuellen Seite anzeigen
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    if (loading) {
        return <p className="text-center text-xl">Loading...</p>;
    }

    return (
        <div className="bg-gray-100 p-8">
            <h2 className="text-3xl font-bold text-center mb-6">Products</h2>
            <p className="text-xl text-center mb-12">Lorem ipsum</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-24">
                {currentProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                    />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
                {currentPage > 1 && (
                    <button onClick={() => setCurrentPage(currentPage - 1)} className="px-4 py-2 bg-blue-500 text-white rounded">
                        Previous
                    </button>
                )}
                {currentPage < totalPages && (
                    <button onClick={() => setCurrentPage(currentPage + 1)} className="px-4 py-2 bg-blue-500 text-white rounded ml-4">
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductList;
