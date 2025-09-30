import MoviesCarousel from "@/components/MoviesCarousel";
import { 
         getPopularMovies, 
         getTopRatedMovies,
         getUpcomingMovies,  
 } from "@/lib/getMovies";


export default async function Home() {
  const upComingMovies = await getUpcomingMovies();
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();
  return (
    <main className="">
      <h1 className="">lets build Disney </h1>

      {/* CarouselBannerWrapper */}
      <div className="flex flex-col space-y-2 xl:-mt-48">
         <MoviesCarousel movies= {upComingMovies}  title= 'Upcoming'
         isVertical/> 
        {<MoviesCarousel movies = {popularMovies}  title= 'Popular'
        isVertical/>}
        {<MoviesCarousel movies = {topRatedMovies}  title= 'Top Rated'
        isVertical/>}
      </div>
    </main>
  );
}
