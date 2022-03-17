import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const MovieList = lazy(() => import("pages/movies/list"));
const ViewMovie = lazy(() => import("pages/movies/view"));
const NotFound = lazy(() => import("components/layout/NotFound"));
const AppRoutes = () => {
 return (
  <Routes>
   <Route path="/" element={<MovieList />} />
   <Route path="movie/:id" element={<ViewMovie />} />
   <Route path="*" element={<NotFound />} />
  </Routes>
 );
};

export default AppRoutes;
