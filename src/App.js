import { useEffect, useState } from 'react';
import './App.css';
import { Timer } from './components/Timer';
import { TrafficLights } from './components/TrafficLights';

function App() {

  return (
    <div className="App">
      <TrafficLights />
      <Timer />
    </div>
  );
}

export default App;
