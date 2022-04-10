import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [launch, setLaunch] = useState([])
  useEffect(() => {
    fetch('https://api.spacexdata.com/v5/launches')
    .then(data => data.json())
    .then(data => data.filter(data => data.date_unix > Date.now()))
    .then(data => console.log(data))
  }, [] )
  return (
    <div className="App">
      <div className="wrapper">
        <div className="place">
          <div className="card" ></div>
          <div className="card" ></div>
          <div className="card" ></div>
        </div>
        <div className="place">

        </div>
        <div className="place">

        </div>
        <div className="place">
        </div>
      </div>
    </div>
  );
}

export default App;
