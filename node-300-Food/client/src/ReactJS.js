import DietMain from './components/DietMain';
import logo from './logo.svg';
import './ReactJS.css';
import "./w3css.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <DietMain />
    </div>
  );
}

export default App;
