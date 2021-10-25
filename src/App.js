import { useEffect, useState } from 'react';
import './App.css';
import { Timer } from './components/Timer';
import { TrafficLights } from './components/TrafficLights';

function App() {
  const [color, setColor] = useState('red')
  const timeoutColor = [
    {
      color: 'red',
      time: 15000
    },
    {
      color: 'yellow',
      time: 3000
    },
    {
      color: 'green',
      time: 10000
    }]
  useEffect(() => {
    setInterval(() => {
      setColor('yellow')
    }, 10000)
    return () => {
      clearInterval()
    }
  }, [])
  return (
    <div className="App">
      <TrafficLights color={color} />
      <Timer />
    </div>
  );
}

export default App;
