import { useQuery } from "hooks";
import { useSearch } from "contexts/SearchProvider";

const useMoviesList = () => {
 const { search } = useSearch();
 const { data: moviesList } = useQuery(
  ["movies.list", search],
  `search/movie?query=${search === "" ? "''" : search}`
 );
 const { data: genresResults } = useQuery(["genres"], "genre/movie/list");
 return { moviesList: moviesList, genresResults: genresResults };
};

export default useMoviesList;
