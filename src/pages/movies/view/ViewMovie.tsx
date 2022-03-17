import React from "react";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { withContainer, withSuspense } from "utils";
import {
 IDetailsMovie,
 IGenreMovieItem,
} from "pages/movies/view/models/IMovie";
import useViewMovie from "./useViewMovie";
import movieImage from "assets/default_movie_image.png";
import MovieItem from "./components/MovieItem";

type IProps = { movie: IDetailsMovie };

const ViewMovie = ({ movie }: IProps) => {
 const movieUrl =
  movie.poster_path === null
   ? movieImage
   : `${process.env.REACT_APP_IMAGE_URL}/${movie.poster_path}`;
 return (
  <div className="flex flex-row flex-wrap md:flex-nowrap justify-start p-2 bg-gray-50 shadow overflow-hidden sm:rounded-lg mt-10">
   <div>
    <img src={movieUrl} alt="movie" className="bg-cover" />
   </div>
   <div className="md:px-10 sh sm:px-5">
    <div className="flex justify-between items-center">
     <div className="text-gray-900 font-bold text-xl mb-2">{movie.title}</div>
     <div className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-gray-700 rounded-full">
      {movie.release_date}
     </div>
    </div>
    <div className="flex flex-col justify-start mt-10">
     <div className="text-indigo-600 font-normal text-lg">Description: </div>
     <div className="text-gray-800">{movie.overview}</div>
    </div>

    <div>
     <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-5">
      <div
       className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
       style={{
        width: `${movie.vote_average === 0 ? 100 : movie.vote_average * 10}%`,
       }}
      >
       IMDB: {movie.vote_average}
      </div>
     </div>
     <MovieItem title="Votes">
      <div className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
       <MdOutlinePeopleAlt className="mr-1 w-3 h-3" />
       {movie.vote_count}
      </div>
     </MovieItem>
     <MovieItem title="Categories">
      {movie.genres.map((g: IGenreMovieItem) => (
       <span
        className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-blue-100 bg-blue-700 rounded mr-2"
        key={g.id}
       >
        {g.name}
       </span>
      ))}
     </MovieItem>
     <MovieItem title="Language">{movie.original_language}</MovieItem>
    </div>
   </div>
  </div>
 );
};

const ViewMovieContainer = () => {
 return withSuspense(withContainer(ViewMovie, useViewMovie));
};

export default ViewMovieContainer;
