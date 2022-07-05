import logo from './logo.svg';
import './React.css';
import BucketInput from './components/BucketInput';
import "./w3css.css";

function React() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BucketInput />
    </div>
  );
}

export default React;
