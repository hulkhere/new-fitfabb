import "./App.css";
import Header from "../src/header"
import ImageSlider from "../src/components/ImageSlider";
import { SliderData } from "../src/components/SliderData";
import Ctas from "../src/ctas";
function App() {
  return (
    <>
      <Header />
      <ImageSlider slides={SliderData} />;
      <Ctas />
    </>
  );
}

export default App;
