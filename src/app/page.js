"use client";
import ProductList from './components/ProductList';
import Link from 'next/link';
import Image from  'next/image';

export default function Home() {

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
                    <Image src="/coding1.jpg" alt="Laptop und Notizbuch auf Schreibtisch" href="https://www.pexels.com/de-de/foto/blauer-einziehbarer-stift-574070/" width="700" height="700" />
                </div>
            </div>

            <div className="text-center mx-48 my-24">
                <h2 className="text-2xl font-bold">Test</h2>
                <p className="text-xl mt-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
            </div>

        <ProductList />
        </main>
    );
}
