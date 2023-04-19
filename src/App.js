import logo from './logo.svg';
import './App.css';
import headerFso from './components/headerFso';
import segundo from './components/segundo';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <headerFso/>
        <segundo/>
      </header>
    </div>
  );
}

export default App;
