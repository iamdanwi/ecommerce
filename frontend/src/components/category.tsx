import React from 'react';
import { categories } from "@/data/data.json";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import Link from 'next/link';

const Category = () => {
    return (
        <section className="container mx-auto py-12">
            <div className='text-center mb-10'>
                <h1 className='text-3xl font-bold text-gray-900'>Categories</h1>
                {/* <p>Here are some of our featured products</p> */}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map((category) => {
                    return (
                        <Link key={category.id} href={category.href} className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                            <Avatar className="w-16 h-16 mb-3">
                                <AvatarImage src={category.image} alt={category.name} />
                                <AvatarFallback className="text-lg">{category.name[0]}</AvatarFallback>
                            </Avatar>
                            <h2 className="text-lg font-semibold text-gray-900">{category.name}</h2>
                            <p className="text-sm text-gray-500">{category.itemCount} items</p>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Category;