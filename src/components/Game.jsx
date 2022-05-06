import React from 'react';
import "./Game.css"
import { Link } from 'react-router-dom';

export const Game = ({game}) => {
  
  console.log(game);
  const { id, name, released, background_image, rating, genres } = game;

  function handleHide() {
    
  }

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
        <Link to={`/games/${id}`}>
          <button>Show Details</button>
        </Link>
        <button onClick={handleHide}>Hide Game</button>
      </div>
    </div>
  )
}
export default Game;
