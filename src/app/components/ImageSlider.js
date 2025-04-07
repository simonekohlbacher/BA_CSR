"use client";
import { useState } from 'react';

const ImageSlider = () => {
    const images = [
        '/coding.jpg',
        '/coding1.jpg',
        '/coding2.jpg',
        '/coding3.jpg',
    ];

    // state current picture
    const [currentImage, setCurrentImage] = useState(0);

    // function for next picture
    // prev ist der aktuelle Wert des currentImage, es wird um 1 erhöht und dann mit der Länge des images-Arrays modulo gerechnet (% images.length), um sicherzustellen, dass nach dem letzten Bild wieder zum ersten Bild gewechselt wird
    const nextImage = () => {setCurrentImage((prev) => (prev + 1) % images.length);};

    // function for previous picture
    const prevImage = () => {setCurrentImage((prev) => (prev - 1 + images.length) % images.length);};

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
