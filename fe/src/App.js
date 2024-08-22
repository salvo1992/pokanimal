import React, { useState, useEffect } from 'react';
import Pokemon from './components/Pokemon';
import Scene from './components/Scene';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
 /*   fetch('http://localhost:5000/api/pokemons')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setPokemons(data))
      .catch(error => setError(error.message));*/
  }, []);

  return (
    <div className="App">
      <h1>Pokémon 3D Game</h1>
      {error && <p>Error: {error}</p>}
      <Scene />
      <div className="pokemon-list">
        {pokemons.map(pokemon => (
          <Pokemon key={pokemon.id} data={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;

