import React from 'react';
import { featuredProducts } from "@/data/data.json";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
} from "@/components/ui/card";
import Image from 'next/image';
import { Button } from './ui/button';

const FeaturedProducts = () => {
    return (
        <section className='container mx-auto px-4 py-8'>
            <div className='text-center mb-8'>
                <h1 className='text-2xl font-bold'>Featured Products</h1>
                <p>Here are some of our featured products</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
                {featuredProducts.map((product) => (
                    <Card key={product.id} className="w-full max-w-[350px] h-full shadow-none border-none">
                        {/* <CardHeader>
                            <CardTitle className="text-lg">{product.name}</CardTitle>
                        </CardHeader> */}
                        <CardContent className="p-0">
                            <div className="relative aspect-square w-full">
                                <Image
                                    src={product.image}
                                    fill
                                    alt={product.name}
                                    className='object-cover'
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <CardDescription className="p-4">{product.name}</CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <div>
                                {product.salePrice ? (
                                    <div>
                                        <CardDescription className='text-red-500 line-through'>${product.price}</CardDescription>
                                        <CardDescription>Sale Price: ${product.salePrice}</CardDescription>
                                    </div>
                                ) : (
                                    <CardDescription>Price: ${product.price}</CardDescription>
                                )}
                            </div>
                            <Button className='cursor-pointer'>BUY</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default FeaturedProducts;