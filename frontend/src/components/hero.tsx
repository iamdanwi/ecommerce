'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
// import heroSlider from "@/data/heroSlider";
import { heroSlider } from "@/data/data.json";


const Hero = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <section>
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-[1400px] px-4 md:px-6 mx-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {heroSlider.map((bannerItems) => (
                        <CarouselItem key={bannerItems.id}>
                            <div className="p-2 md:p-4">
                                <Card className="border-none shadow-none">
                                    <CardContent className="relative flex p-0 aspect-[16/9] md:aspect-[21/9] items-center justify-center overflow-hidden rounded-lg">
                                        <Image
                                            src={bannerItems.image}
                                            alt={bannerItems.description}
                                            fill
                                            className="object-cover"
                                            priority
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
                                        />
                                        <div className="absolute inset-0 bg-black/20">
                                            <div className="absolute bottom-8 left-8 text-white">
                                                <h2 className="text-2xl md:text-4xl font-bold mb-2">{bannerItems.title}</h2>
                                                <p className="text-sm md:text-lg mb-4">{bannerItems.description}</p>
                                                <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors">
                                                    {bannerItems.buttonText}
                                                </button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
            </Carousel>
        </section>
    )
}

export default Hero;