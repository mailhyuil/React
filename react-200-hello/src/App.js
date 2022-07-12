import { createContext } from "react";
import "./App.css";
import Main from "./components/Main";
import Sub from "./components/Sub";

//TODO dks
function App() {
  const store = createContext();
  return (
    <div className="body">
      <Sub hi="컴포넌트" />
      <Main />
    </div>
  );
}

export default App;
