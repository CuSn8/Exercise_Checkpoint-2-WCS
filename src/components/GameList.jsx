import axios from "axios";
import React from 'react';
import Game from "./Game";
import { useEffect } from "react";
import { useState } from "react";

const GameList = () => {

    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        axios
        .get("https://apis.wilders.dev/wild-games/games/")
        .then((res) => res.data)
        .then((data) => setGameList(data))
    }, [])

    console.log(gameList);

  return (
    <h2>Hello</h2>
  )
}
export default GameList;
