import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./GameDetails.css"


export const GameDetails = () => {
    
    const {id} = useParams();
    const [gameDetails, setGameDetails] = useState({});

    useEffect(() => {
        axios
        .get(`https://apis.wilders.dev/wild-games/games/${id}`)
        .then((res) => res.data)
        .then((data) => setGameDetails(data))
    }, [id])

    console.log(gameDetails);
    const { name, released, background_image, rating, genres } = gameDetails;


  return (
    <div>
        <div className='cover'>
            <img className='cover-img' src={background_image} alt={name} />
        </div>
        <h1>{name}</h1>
        <h2>Released : {released}</h2>
        <h3>Rating : {rating}</h3>

    </div>
  )
}
