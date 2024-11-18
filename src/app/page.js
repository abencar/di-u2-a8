'use client'
import { useState } from 'react';

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick(e) {
    e.preventDefault();
    alert('Lo siguiente es ' + (walk ? 'parar' : 'caminar'));
    setWalk(!walk);
  }

  return (
    <>
      <button onClick={handleClick}>
        Cambia a {walk ? 'Parar' : 'Caminar'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Caminar' : 'Parar'}
      </h1>
    </>
  );
}
