import React from 'react';

function Pokemon({ data }) {
  return (
    <div className="pokemon">
      <h2>{data.name}</h2>
      <img src={data.image} alt={data.name} />
    </div>
  );
}

export default Pokemon;