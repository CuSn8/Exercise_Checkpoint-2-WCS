import axios from "axios";
import React from 'react';
import Game from "./Game";
import { useEffect } from "react";
import { useState } from "react";

const GameList = () => {

    const [gameList, setGameList] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);

    useEffect(() => {
        axios
        .get("https://apis.wilders.dev/wild-games/games/")
        .then((res) => res.data)
        .then((data) => setGameList(data))
    }, [])

    console.log(gameList);

    function handleClick() {
      setIsFiltered(!isFiltered);
    }
    console.log(isFiltered);
    console.log(gameList.filter((game) => {
      return game.rating >= 4.5
    }));

  return (
    <div>
      <button onClick={handleClick}>Show Best Games Only : {isFiltered ? "ON" : "OFF"}</button>
      <div>{isFiltered ? gameList.filter((game) => {
        return game.rating >= 4.5
      }).map((item) => {
        return <Game game={item} />}) : gameList.map((item, index) => {
       return <Game game={gameList[index]} />
      })}
      </div>
    </div>
  )
}
export default GameList;
