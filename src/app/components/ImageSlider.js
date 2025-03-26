"use client";
import { useState } from 'react';

const ImageSlider = () => {
    const images = [
        '/coding.jpg',
        '/coding1.jpg',
        '/coding2.jpg',
        '/coding3.jpg',
    ];

    // state current pic
    const [currentImage, setCurrentImage] = useState(0);

    // function for next pic
    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length); // Wiederholt die Bilder (Cyclic)
    };

    // function for previous pic
    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length); // Wiederholt die Bilder (Cyclic)
    };

    return (
        <div className="relative w-full bg-gray-200 p-4 py-24">

            <div className="relative w-full max-w-7xl mx-auto flex justify-center items-center">
                <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} className="h-150 rounded-lg"/>
                <button onClick={prevImage} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full opacity-70 hover:opacity-100">&#8592;</button>
                <button onClick={nextImage} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full opacity-70 hover:opacity-100">&#8594;</button>
            </div>
        </div>
    );
};

export default ImageSlider;
