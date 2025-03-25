"use client";

const ProductCard = ({ id, title, description, image, price, rating }) => {
    return (
        <div key={id} className="border rounded-2xl shadow-lg p-4 bg-white flex flex-col w-80">
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex justify-between items-center mt-auto">
                    <span className="text-lg font-semibold text-green-600">${price}</span>
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        Nice
                    </button>
                </div>
            </div>
        </div>
    );
};


export default ProductCard;