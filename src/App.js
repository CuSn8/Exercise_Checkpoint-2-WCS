import React from 'react';
import './App.css';
import Header from './components/Header';
import GameList from './components/GameList';

function App() {
  
  const appName = "React Games"

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Header name={appName}/>
      <GameList />

    </main>
  );
}

export default App;
