import logo from './logo.svg';
import './React.css';
import FoodInput from './components/FoodInput';
import "./w3css.css";

function React() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FoodInput />
    </div>
  );
}

export default React;
