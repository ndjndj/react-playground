import logo from './logo.svg';
import './App.css';
import Card from './components/react-dnd/card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Card text='Write the docs' />
    </div>
  );
}

export default App;
