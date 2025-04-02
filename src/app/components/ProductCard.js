"use client";

import React from 'react'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'
import Link from "next/link";

const ProductCard = ({ id, title, description, image, price }) => {
    // shorten description (max 100 char) and add "..."
    const truncatedDescription = description.length > 100 ? description.substring(0, 100) + "..." : description;
    return (

        <CCard className="shadow-lg rounded-2xl bg-white p-4 flex flex-col">
            <div className="w-full h-48 flex justify-center">
                <CCardImage src={image} alt={title} className="rounded object-cover w-48 h-48"/>
            </div>
            <CCardBody className="p-4 flex flex-col flex-grow">
                <CCardTitle className="text-xl font-bold">{title}</CCardTitle>
                <CCardText className="text-gray-600 flex-grow">{truncatedDescription}</CCardText>
                <div className="flex justify-between items-center mt-12">
                    <span className="text-lg font-semibold text-green-600">${price}</span>
                    <Link href={`/products/detail/${id}`}>
                        <CButton className="bg-gray-800 rounded px-4 px-2 text-white hover:bg-gray-600">
                            Detail
                        </CButton>
                    </Link>
                </div>
            </CCardBody>
        </CCard>
    );
};

export default ProductCard;
