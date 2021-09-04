import "./App.css";
import ImageSl from "./components/ImageSl";
import { SliderData } from "./components/SliderData";
function App() {
  return (
    <div className="App">
      <ImageSl slides={SliderData} />
    </div>
  );
}

export default App;
