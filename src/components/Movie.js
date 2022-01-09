import React from "react";
import { useParams } from "react-router-dom";
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
//Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
//Hooks
import { useMovieFetch } from "../Hooks/useMovieFetch";
//image
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
  if (loading) return <Spinner />;
  if (error) return <div>something went terribly wrong</div>;
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
    </>
  );
};
export default Movie;
