"use client";

// Das HTML, das durch diese Komponente erzeugt wird, wird initial vom Server gesendet, aber nach dem Laden im Browser wird es durch React auf der Client-Seite hydratisiert und interaktiv gemacht.

import ProductList from './components/ProductList';
export default function Home() {

    return (
        <main>
            <div className="p-24 text-center">
                <h1 className="text-3xl font-bold">Willkommen zur Hybrid-App!</h1>
                <p className="text-xl mt-2 text-gray-600">Diese Anwendung nutzt verschiedene Rendering-Techniken.</p>
            </div>

            <div className="bg-gray-800 grid grid-cols-2 gap-4 p-4 mt-12 text-white">
                <div className="mx-12 py-12 text-left">
                    <h2 className="text-xl font-bold">Client-Side Rendering (CSR)</h2>
                    <p className="mt-2 mb-12">Diese Seite wird clientseitig gerendert.</p>
                </div>
                <div className="mx-12 py-12 justify-self-end">
                    <img src="/logo_inverted.png" alt="Logo" className="h-48" />
                </div>
            </div>

            <ProductList />
        </main>
    );
}
