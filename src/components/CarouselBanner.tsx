'use client'

import {Movie} from "../../typings";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";

Autoplay.globalOptions = {delay: 8000}

function CarouselBanner({movies}: {movies: Movie[]}) {
    const [emblaRef] = useEmblaCarousel({loop: true, duration: 100}, [Autoplay()]);
    
    return (
        <div className="overflow-hidden lg:-mt-40 relative cursor-pointer" ref={emblaRef}>
            <div className="flex">
                {movies.map((movie) => (
                    <div key={movie.id} className="flex-full min-w-0 relative">
                        <Image
                            src={getImagePath(movie.backdrop_path, true)}
                            alt={movie.title}
                            width={1920}
                            height={1080}
                            className="w-full h-[500px] object-cover lg:h-[700px] rounded-md"
                        />
                        {/* Texto superpuesto sobre la imagen */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-transparent to-transparent">
                            <h2 className="text-5xl font-bold text-white max-w-xl z-50">
                                {movie.title}
                            </h2>
                            <p className="max-w-xl line-clamp-3 text-white mt-2">
                                {movie.overview}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarouselBanner;