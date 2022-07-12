import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./w3css.css";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import TodoMain from "./components/todo/TodoMain";
import BucketMain from "./components/bucket/BucketMain";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* react-router-dom의 영역 */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="todo" element={<TodoMain />} />
          <Route path="bucket" element={<BucketMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
