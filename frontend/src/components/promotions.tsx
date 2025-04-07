/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { weeklySpecials } from "@/data/data.json";
import { Button } from './ui/button';

const Promotions = () => {
    return (
        <section className='bg-gradient-to-b from-gray-50 to-gray-100'>
            <div className="container mx-auto py-16 px-4">
                <div className='text-center mb-12'>
                    <h1 className='text-3xl font-bold text-gray-900'>Weekly Specials</h1>
                    <p className='text-gray-600 mt-2'>Discover our amazing deals</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {weeklySpecials.map((product) => (
                        <div key={product.id} className=" overflow-hidden">
                            <div className="relative">
                                <img src={product.image} alt={product.title} className="w-full h-56 object-cover" />
                                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    -{product.discount}%
                                </div>
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h2>
                                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                                    </div>
                                    <span className="text-sm text-gray-500">Valid until {product.validUntil}</span>
                                </div>
                                <Button className="w-full cursor-pointer">
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Promotions;