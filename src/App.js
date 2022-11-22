//import logo from './logo.svg';
import './App.css';
import PreNav from './component/PreNav';
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import data from './data/data.json';
import Products from './component/Products';
import Pro from './component/Pro';
import Offers from './component/Offers.js';
import Material from './component/Material.js';
import HotAccessories from './component/HotAccessories.js'
import HotAccessoriesMenu from './component/HotAccessoriesMenu.js';
import {  BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Videos from './component/Videos';
import SliderTwo from './component/SliderTwo';
import Footer from './component/Footer';

function App() {
  return (
<Router>
      <PreNav/>
      <Navbar logo={data.logo} />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Products products="START PRODUCTS"/>
      <Material starProduct={data.starProduct}/>
      <Products products="HOT ACCESSORIES"/>
      <HotAccessories/>
      <Routes>
      <Route exact path="/music" element={ <HotAccessoriesMenu music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />}></Route>
      <Route exact path="/smartDevice" element={ <HotAccessoriesMenu smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />}></Route>
      <Route exact path="/home" element={ <HotAccessoriesMenu home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />}></Route>
      <Route exact path="/lifestyle" element={ <HotAccessoriesMenu lifestyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />}></Route>
      <Route exact path="/mobileAccessories" element={ <HotAccessoriesMenu mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />}></Route>
       </Routes>
      <Products products="PRODUCT REVIEWS"/>
      <Pro pro={data.productReviews} />
      <Products products="VIDEOS"/>
      <Videos videos={data.videos}/>
      <Products products="IN THIS PRESS"/>
      <SliderTwo banner={data.banner.start}/>
      <Footer footer={data.footer}/>
       </Router>

  );
}

export default App;
