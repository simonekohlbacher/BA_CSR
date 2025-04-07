"use client";
import Link from 'next/link';
import Image from  'next/image';
import ProductTeaser from './components/ProductTeaser';
import CategoryList from './components/CategoryList';
import EmployeeList from './components/EmployeeList';
import ImageSlider from './components/ImageSlider';
import {useEffect, useState} from "react";

export default function Home() {
        // state for saving categories, initially empty, only once after first render
        const [categories, setCategories] = useState([]);
        // state for loading, if true dates are still loading
        const [loading, setLoading] = useState(true);

        // use effects in a functional component, tells the app to fetch
        useEffect(() => {
            // asnyc function to fetch categories
            const fetchCategories = async () => {
                setLoading(true);
                try {
                    const response = await fetch("https://fakestoreapi.com/products/categories");
                    const data = await response.json();
                    // set categories to the fetched data
                    setCategories(data);
                } catch (error) {
                    console.error("Error loading categories:", error);
                }
                setLoading(false);
            };

            fetchCategories();
        }, []);

        return (
        <main>
            <div className="p-24 text-center">
                <h1 className="text-3xl font-bold">Willkommen zur CSR-App.</h1>
                <p className="text-xl mt-8 text-gray-600">
                    Diese Anwendung nutzt verschiedene Rendering-Techniken, um Inhalte darzustellen.<br />
                    Im Vergleich dazu steht die <Link href="https://ba-hybrid.vercel.app/" target="_blank" className="underline"> Seite mit gemischten Ansätzen</Link>.<br />
                    Ziel ist es,
                </p>
            </div>

            <div className="bg-gray-800 grid grid-cols-2 gap-4 mt-12 text-white">
                <div className="m-24 py-12 text-left">
                    <h2 className="text-2xl font-bold">Eingesetzte Techniken</h2>
                    <p className="text-xl mt-2 mb-12">Diese Seite wird clientseitig (mit CSR) gerendert.<br />
                        Dabei wird die Seite im Browser aufgebaut und die Inhalte dynamisch nachgeladen.<br />
                    </p>
                </div>
                <div className="justify-self-end">
                    <Image src="/coding1.jpg" alt="Laptop und Notizbuch auf Schreibtisch" priority={true} width="700" height="700" />
                    <p className="text-xs">Bild Quelle von: https://www.pexels.com/de-de/foto/blauer-einziehbarer-stift-574070/</p>
                </div>
            </div>

            <div className="text-center mx-48 my-24">
                <h2 className="text-2xl font-bold">Bilderslider</h2>
                <p className="text-xl mt-2">
                    Im Folgenden wird ein Bildslider erstellt, der vier Bilder enthält, durch die du dich durchklicken kannst.
                    Er wird clientseitig gerendert, da er eine Interaktion von den Nutzer:innen erfordert und dabei ein Zustand gespeichert wird.
                </p>
            </div>

            <ImageSlider />

            {/* Render all categories and products in categories */}
            <CategoryList categories={categories}/>
            {categories.map((category) => (
                <ProductTeaser key={category} selectedCategory={category} />
            ))}

            <div className="bg-gray-800 text-center text-white p-24">
                <h2 className="text-2xl font-bold">Daten fetchen</h2>
                <p className="text-xl mt-2">Um nun noch weitere Daten zu fetchen, holen wir uns 50 Mitarbeiter:innen von einer Open Source API rei (https://randomuser.me), die uns Fake Daten und Bilder übermittelt. Diese Visitenkarten werden nun vom Client zusammengebaut und dargestellt. </p>
            </div>

            {/* Employees */}
            <EmployeeList />

            <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="m-24 py-12 text-left">
                    <h2 className="text-2xl font-bold">Eingesetzte Techniken</h2>
                    <p className="text-xl mt-2 mb-12">Diese Seite wird clientseitig (mit CSR) gerendert.<br />
                        Dabei wird die Seite im Browser aufgebaut und die Inhalte dynamisch nachgeladen.<br />
                    </p>
                </div>
                <div className="justify-self-end">
                    <Image src="/coding1.jpg" alt="Laptop und Notizbuch auf Schreibtisch" priority={false} href="https://www.pexels.com/de-de/foto/blauer-einziehbarer-stift-574070/" width="700" height="700" />
                    <p className="text-xs">Bild Quelle von: https://www.pexels.com/de-de/foto/blauer-einziehbarer-stift-574070/</p>
                </div>
            </div>

            <footer className="bg-gray-800 text-white p-24 mt-16">
                <h2 className="text-3xl font-bold mb-4">Test Footer</h2>
                <p className="text-lg mb-4">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
                <div className="space-x-4 mt-8">
                    <a href="#" className="text-xl hover:text-gray-400">Privacy Policy</a>
                    <a href="#" className="text-xl hover:text-gray-400">Terms of Service</a>
                    <a href="#" className="text-xl hover:text-gray-400">Contact</a>
                </div>

                <div className="flex space-x-6 mt-8">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">INSTA</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GITHUB</a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                </div>

                <div className="mt-8">
                    <p className="text-sm">© 2025 Simone K. All rights reserved.</p>
                </div>
            </footer>

        </main>
    );
}
