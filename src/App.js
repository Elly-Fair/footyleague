import logo from './logo.webp';
import './App.css';

import generateLeagueTable from './FootballLeague';
import results from './match.json';


const handleClick = () => {generateLeagueTable()}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Football League.
        </p>
        <button onClick={handleClick} >Generate League Table</button>
      </header>
    </div>
  );
}

export default App;
