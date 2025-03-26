"use client";
import Link from "next/link";

const CategoryList = ({ categories}) => {
    return (
        <div className="bg-gray-100 p-8 py-12">
            <h3 className="text-2xl font-bold text-center mb-8">Produkte</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category) => (
                    <Link key={category} href={`/products/${category}`}>
                        <div className="bg-white p-4 rounded shadow text-center hover:bg-gray-200 cursor-pointer">
                            {category}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
