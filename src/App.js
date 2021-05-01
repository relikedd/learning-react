import logo from './logo.svg';
import './App.css';
import ToUpper from './components/ToUpper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToUpper/>
      </header>
  
    </div>
  );
}

export default App;
