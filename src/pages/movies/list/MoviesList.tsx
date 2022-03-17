import { useState } from "react";

import { withSuspense, withContainer } from "utils";
import useMoviesList from "./useMoviesList";
import { IMovieList, IMovie } from "pages/movies/list/models/IMovie";
import { IGenres } from "pages/movies/list/models/IGenre";
import { List } from "pages/movies/list/components";

type IProps = {
 moviesList: IMovieList;
 genresResults: IGenres;
};
const MoviesList = ({ moviesList, genresResults }: IProps) => {
 const movies = moviesList.results;
 const [showDate, setShowDate] = useState(false);
 return (
  <List setShowDate={setShowDate}>
   {movies.map((movie: IMovie) => (
    <List.Item
     key={movie.id}
     movie={movie}
     genres={genresResults.genres}
     showDate={showDate}
    />
   ))}
  </List>
 );
};
const MoviesListContainer = () => {
 return withSuspense(withContainer(MoviesList, useMoviesList));
};

export default MoviesListContainer;
