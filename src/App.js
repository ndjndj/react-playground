import logo from './logo.svg';
import './App.css';
import Sample from './components/react-draggable/sample'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Sample />
    </div>
  );
}

export default App;
