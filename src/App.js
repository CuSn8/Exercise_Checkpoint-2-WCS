import React from 'react';
import './App.css';
import Header from './components/Header';
import GameList from './components/GameList';
import { Routes, Route, Link } from "react-router-dom";
import { GameDetails } from './components/GameDetails';

function App() {
  
  const appName = "React Games"

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Header name={appName}/>
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="games/:id" element={<GameDetails />} />
      </Routes>

    </main>
  );
}

export default App;
