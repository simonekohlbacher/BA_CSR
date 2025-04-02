"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard";
import Link from "next/link";

const ProductDetail = () => {
    const { id } = useParams(); // Holt die Produkt-ID aus der URL
    const [product, setProduct] = useState(null); // Zustand für Produktdaten

    // Daten von der API holen (hier ein Beispiel mit FakeStoreAPI)
    useEffect(() => {
        if (id) {
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then((response) => response.json())
                .then((data) => setProduct(data))
                .catch((error) => console.error("Fehler beim Laden der Produktdaten", error));
        }
    }, [id]);

    if (!product) {
        return <p>Lade Produktdaten...</p>;
    }

    return (
        <div className="p-6 bg-white rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Produkt Detail</h1>
            <ProductCard
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
            />
            <Link href="/">
                <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">
                    ⬅ Zurück
                </button>
            </Link>
        </div>

    );
};

export default ProductDetail;
