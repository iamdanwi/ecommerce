import React from 'react';
import { testimonials } from "@/data/data.json";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonial = () => {
    return (
        <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900">Customer Reviews</h1>
                    <p className="text-gray-600 mt-2">What our customers say about us</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <Avatar className="h-12 w-12">
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                                        <div className="flex gap-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">&quot;{testimonial.text}&quot;</p>
                                <p className="text-sm text-gray-500 mt-4">{testimonial.date}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;