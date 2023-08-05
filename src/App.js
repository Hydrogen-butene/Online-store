import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router} from "react-router-dom";
import Slider from "./components/Slider.js";
import {default as data} from "./data/data.json";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProduct from "./components/StarProduct";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCT"/>
      <StarProduct starProduct = {data.starProduct}/>
      <Banner banner={data.banner}/>
      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
