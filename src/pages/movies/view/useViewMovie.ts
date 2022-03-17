import { useQuery } from "hooks";
import { useParams } from "react-router-dom";

const useViewMovie = () => {
 const { id } = useParams<{ id: string }>();
 const { data: movie } = useQuery(["movie.details", id], `movie/${id}`);
 return { movie: movie! };
};

export default useViewMovie;
