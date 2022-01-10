import "./App.css";
import Header from "../src/header"
import ImageSlider from "../src/components/ImageSlider";
import { SliderData } from "../src/components/SliderData";
import Ctas from "../src/ctas";
import Maps from "../src/maps";


function App() {
  return (
    <>
      <Header />
      <ImageSlider slides={SliderData} />;
      <Ctas />
      <Maps />
      
    </>
  );
}

export default App;
