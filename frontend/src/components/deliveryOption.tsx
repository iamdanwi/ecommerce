/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { deliveryOptions } from "@/data/data.json";
import { Button } from './ui/button';
import Link from 'next/link';

const DeliveryOption = () => {
    return (
        <section className="container mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Delivery Options</h2>
            <div className='flex items-center justify-evenly flex-wrap'>
                {deliveryOptions.map((delivery) => {
                    return (
                        <Card key={delivery.id} className="w-[350px] shadow-none border-none">

                            <CardContent>
                                <div className="">
                                    <div className="h-64 md:h-full relative">
                                        <img
                                            src={delivery.image}
                                            alt={delivery.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                            <CardHeader>
                                <CardTitle>{delivery.name}</CardTitle>
                                <CardDescription>{delivery.description}</CardDescription>

                            </CardHeader>
                            <CardFooter className="flex justify-between">
                                <p className='text-green-700'>{delivery.fee}</p>
                                <Link href={delivery.buttonLink}>
                                    <Button>{delivery.buttonText}</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
};

export default DeliveryOption;

