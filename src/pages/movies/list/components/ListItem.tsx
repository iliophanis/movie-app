import React from "react";
import { BiStar } from "react-icons/bi";

import { IMovie } from "pages/movies/list/models/IMovie";
import { IGenre } from "pages/movies/list/models/IGenre";
import movieImage from "assets/default_movie_image.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type IProps = {
 movie: IMovie;
 genres: IGenre[];
 showDate: boolean;
};
const ListItem = ({ movie, genres, showDate }: IProps) => {
 const navigate = useNavigate();
 const movieUrl =
  movie.poster_path === null
   ? movieImage
   : `${process.env.REACT_APP_IMAGE_URL}/${movie.poster_path}`;

 const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
 };
 const imageVariants = {
  visible: { opacity: 1, transition: { duration: 5 } },
  hidden: { opacity: 0 },
 };
 return (
  <motion.li
   onClick={() => navigate(`/movie/${movie.id}`)}
   whileHover={{ scale: 1.1 }}
   variants={item}
   className="cursor-pointer flex items-start mt-1 mb-1 space-x-6 p-6 w-full lg:w-6/12 rounded-lg border border-gray-100 shadow-xl hover:shadow-indigo-500/50 hover:bg-gray-100"
  >
   <motion.img
    variants={imageVariants}
    src={movieUrl}
    alt="movie photo"
    width="60"
    height="90"
    className="flex-none rounded-md bg-slate-100"
   />

   <div className="min-w-0 relative flex-auto">
    <h2 className="font-semibold text-slate-900 truncate pr-20">
     {movie.title}
    </h2>
    {showDate && (
     <div className="w-full items-center space-x-1">{movie.release_date}</div>
    )}
    <div className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
     <div className="px-1.5 ring-1 ring-slate-200 rounded mr-2 flex items-center">
      <BiStar className="text-blue-500 mr-1" />
      {movie.vote_average}
     </div>

     {movie.genre_ids.map((id: number) => {
      const genreName = genres.find((g: IGenre) => g.id === id)!.name;
      return (
       <span
        className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded mr-2"
        key={id}
       >
        {genreName}
       </span>
      );
     })}
     <div className="flex-none w-full mt-2 font-normal">
      <div className="text-slate-400">{movie.overview}</div>
     </div>
    </div>
   </div>
  </motion.li>
 );
};

export default ListItem;
