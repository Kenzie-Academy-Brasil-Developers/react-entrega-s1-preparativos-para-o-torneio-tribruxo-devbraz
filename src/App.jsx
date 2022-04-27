import './App.css';
import StartContainer from './components/StartContainer';
import { useState, useEffect } from 'react';

function App() {

  const [tournamentWizzards, setTournamentWizzards] = useState([])

  useEffect(()=>{

    fetch('https://hp-api-ken.herokuapp.com/api/characters/students')
    .then((response) => response.json())
    .then((response) => setTournamentWizzards(response))

  },[])

  const [click, setClick] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <StartContainer click={click} setClick={setClick} tournamentWizzards={tournamentWizzards}/>
      </header>
    </div>
  );
}

export default App;
