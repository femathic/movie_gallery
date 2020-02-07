import React from 'react';

const MoviePage = (props) => (
  <h1> MoviePage {props.match.params.id} </h1>
);


export default MoviePage;