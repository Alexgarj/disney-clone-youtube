"use client";
import { Movie } from "@/typings";
import useEmblaCarousel from "embla-carousel-react"; // 18.8k (gzipped: 7.4k)
import Autoplay from "embla-carousel-autoplay"; // 1.9k (gzipped: 886)
import Image from "next/image"; // 15.8k (gzipped: 5.8k)
import getImagePath from "@/lib/getImagePath";
Autoplay.globalOptions = { delay: 8000 };

function CarouselBanner({ movies }: { movies: Movie[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div
      className="overflow-hidden lg:-mt-40 relative cursor-pointer"
      ref={emblaRef}
    >
      {/* CarouselsBanner content would go here */}
    </div>
  );
}

export default CarouselBanner;