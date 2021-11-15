import logo from './veepee-white.svg';
import './App.css';

function App() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  return (
    <div className="App">
      <header className="App-header">
        <img width="500" src={logo} className="App-logo" alt="logo" />
        <p>
          Follow the steps contained in the <b>README.md</b> file
          <br/> Here is the url to use:
        </p>
        <a className="App-link" href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      </header>
    </div>
  );
}

export default App;
