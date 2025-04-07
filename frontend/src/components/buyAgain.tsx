/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { quickShoppingLists } from "@/data/data.json";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Button } from './ui/button';

const BuyAgain = () => {
    return (
        <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
            <div className='container mx-auto'>
                <div className='text-center mb-12'>
                    <h1 className='text-3xl font-bold text-gray-900'>Quick Shopping Lists</h1>
                    <p className='text-gray-600 mt-2'>Your favorite combinations for easy reordering</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {quickShoppingLists.map((list) => (
                        <Card
                            key={list.id}
                            className="overflow-hidden transition-all duration-300 hover:shadow-lg py-0 border-none shadow-none"
                        >
                            <div className="relative h-48">
                                <img
                                    src={list.image}
                                    alt={list.name}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <h2 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                                    {list.name}
                                </h2>
                            </div>
                            <CardContent className="p-6">
                                <ul className="space-y-2">
                                    {list.items.map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-gray-300 rounded-full mr-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="px-6 pb-6">
                                <Button className="w-full bg-black hover:bg-gray-800 text-white transition-colors cursor-pointer">
                                    Add to Cart
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BuyAgain;