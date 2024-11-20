import React, { useEffect, useState } from 'react';
import './App.css'; // Import the CSS file
import Navbar from './Navbar';

function App() {
  const [playerData, setPlayerData] = useState(null);
  const [playerName, setPlayerName] = useState('');

  const fetchPlayerData = async () => {
    if (playerName) {
      const response = await fetch(`/api/player-data/${playerName}`);
      const data = await response.json();
      setPlayerData(data);
    }
  };

  return (
    <div>
      <Navbar /> {/* Add the Navbar here */}
      <h1>Player Data Fetcher</h1>
      <input
        type="text"
        placeholder="Enter player name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button onClick={fetchPlayerData}>Fetch Player Data</button>
      {playerData && (
        <div>
          <h2>Player Data:</h2>
          <pre>{JSON.stringify(playerData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;