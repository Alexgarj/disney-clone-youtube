'use clientet'

import {Movie} from "@/typings";

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";

Autoplay.globalOptions = {delay : 8000}
function CarouselBanner({movies}: {movies: Movie[]}) {
    const [emblaRef] = useEmblaCarousel({loop: true, duration : 100}, [Autoplay()]);
  return (
    <div className="overflow-hidden lg:-mt-40 relative cursor-pointer"  ref={emblaRef}
    >
       <div className="flex">
        {movies.map((movie) => (
            <div key={movie.id} className="flex-full min-w-0 relative">
                <Image
                    key={movie.id}
                    src={getImagePath(movie.backdrop_path, true)}
                    alt={movie.title}
                    width={1920}
                    height={1080}
                    className="w-full h-[500px] object-cover lg:h-[700px] rounded-md"
                />
            </div>
            <h2 className="text-5xl font-bold max-w-xl z-50">
                {movie.title}
            </h2>
            <p className="max-w-xl line-clamp-3">{movie.overview}</p>
        ))}
    </div>
    </div>
  )
}

export default CarouselBanner