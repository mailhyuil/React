import backgroundImage from "./images/image.jpg";
import "./App.css";
import BucketMain from "./components/BucketMain";
import "./w3css.css";

// css style을 JS코드로 구현하기
const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundAttachment: `scroll`,
  backgroundSize: `contain`,
};

function App() {
  return (
    <div className="App">
      <header className="App-header" style={backgroundStyle}>
        <section className="w3-container w3-margin"></section>
      </header>
      <BucketMain />
    </div>
  );
}

export default App;
