import React from "react";

///styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
  <>
    <Image src={image} alt="movie-thumb" />
  </>
);

export default Thumb;
