/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { recipes } from "@/data/data.json";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ChefHat } from "lucide-react";
import Link from 'next/link';

const Recipes = () => {
    return (
        <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
            <div className='container mx-auto'>
                <div className='text-center mb-12'>
                    <h1 className='text-3xl font-bold text-gray-900'>Recipe Inspiration</h1>
                    <p className='text-gray-600 mt-2'>Discover delicious meals to cook with your groceries</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipes.map((recipe) => (
                        <Card key={recipe.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg shadow-none border-none">
                            <div className="relative h-48">
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h2 className="text-xl font-semibold">{recipe.title}</h2>
                                </div>
                            </div>
                            <CardContent className="p-6">
                                {recipe.ingredients.map((ingredient) => (
                                    <div key={ingredient} className="flex items-center mb-2">
                                        <li className="ml-2 text-gray-700">{ingredient}</li>
                                    </div>
                                ))}
                                <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} />
                                        <span>{recipe.prepTime}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ChefHat size={16} />
                                        <span>{recipe.difficulty}</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="px-6">
                                <Link href={recipe.link} className='w-full'>

                                    <Button variant="outline" className="w-full cursor-pointer">
                                        View Recipe
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Recipes;