import "./App.css";
import Header from "../src/header"
import Slider from "../src/slider"
import ImageSlider from "../src/components/ImageSlider";
import { SliderData } from "../src/components/SliderData";

function App() {
  return (
    <>
      <Header />
      <ImageSlider slides={SliderData} />;
    </>
  );
}

export default App;
