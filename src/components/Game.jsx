import React from 'react';
import "./Game.css"

export const Game = ({game}) => {
  
  console.log(game);
  const { name, released, background_image, rating, genres } = game;

    return (
    <div className='container'>
      <div className="img-container">
        <img className='img' src={background_image} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <h3>Release date : {released}</h3>
        <h4>Rating : {rating}</h4>
        <h4>Genres : {genres.map((genre) => { return `${genre.name}, `})}</h4>
      </div>
    </div>
  )
}
export default Game;
