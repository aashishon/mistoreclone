import './App.css';
import Navbar from './components/preNavbar';
import MainNavbar from './components/Navbar';
import {BrowserRouter as Router , Route} from "react-router-dom";
import Slider from './components/Slider';
import data from "../src/data/data.json";
import Offers from "../src/components/Offers";
import Heading from "../src/components/Heading";
import Starproduct from "../src/components/Starproduct";
import Hotmenu from "../src/components/Hotmenu";
// import HotAccessories from "../src/components/HotAccessories.js";
import Productreview from "../src/components/Productreview.js";
import Videos from "../src/components/Videos.js";
import Banner from "../src/components/Banner.js" 
import Footer from "../src/components/Footer.js" 
import Navoptions from "../src/components/Navoptions.js"
import { NavItem } from 'react-bootstrap';
 




function App() {
  return (
  <Router>
    <Navbar />
    <MainNavbar />
    <Navoptions miphones = {data.miPhones} redmiphones={data.redmiPhones} tv={data.tv} laptops = {data.laptop} fitness = {data.fitnessAndLifeStyle} home={data.home} audio = {data.audio} />

    <Slider start= {data.banner.start} />
    <Offers offer={data.offer} />    
    <Heading text = "STAR " />
    <Starproduct starproduct={data.starProduct} />
    <Heading text= "HOT ACCESSORIES" />
    <Hotmenu />
    {/* <Route exact path="/music">
       <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />
    </Route> */}
    <Heading text= "PRODUCT REVIEW" />
    <Productreview productreview = {data.productReviews}/>
    <Heading text= "VIDEOS" />
    <Videos videos = {data.videos} />
    <Heading text= "IN THE PRESS" />
    <Banner banner = {data.banner.end}/>
    <Footer  footer = {data.footer}/>
  </Router>
    );
}
export default App;
