import React, { useState } from 'react';

const Players = () => {
  const [playerData, setPlayerData] = useState(null);
  const [playerName, setPlayerName] = useState('');
  const [error, setError] = useState(null);

  const fetchPlayerData = async () => {
    if (playerName) {
      setError(null); // Reset error state
      try {
        const response = await fetch(`http://b8c40s8.143.198.70.30.sslip.io/api/PlayerDataAdvancedPlayoffs/name/${encodeURIComponent(playerName)}`);
        if (!response.ok) {
          throw new Error('Player not found');
        }
        const data = await response.json();
        setPlayerData(data);
      } catch (err) {
        setError(err.message);
        setPlayerData(null); // Clear previous data
      }
    }
  };

  return (
    <div>
      <h2>Player Data</h2>
      <input
        type="text"
        placeholder="Enter player name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button onClick={fetchPlayerData}>Search</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {playerData && (
        <div className="player-info">
          <h3>Player Info:</h3>
          {playerData.map((player) => (
            <div key={player.id}>
              <p><strong>Name:</strong> {player.playerName}</p>
              <p><strong>Position:</strong> {player.position}</p>
              <p><strong>Age:</strong> {player.age}</p>
              <p><strong>Games Played:</strong> {player.games}</p>
              <p><strong>Minutes Played:</strong> {player.minutesPlayed}</p>
              <p><strong>Team:</strong> {player.team}</p>
              <p><strong>Season:</strong> {player.season}</p>
              {/* Add any additional player data fields here */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Players;