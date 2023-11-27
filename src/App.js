import { BrowserRouter, Routes, Route } from "react-router-dom";

import GoogleRes from "./Components/GoogleRes";
import Login from "./Components/Login";
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Otpvarify from './Components/Otpvarify'
import FilterPage from './Components/FilterPage'
import FilterBrand from "./Components/FilterBrand";
import FavrateProfile from "./Components/FavrateProfile"
import AllSection from './Components/AllSection'
import ProductDetails from './Components/ProductDetails'
import BannerDetails from './Components/BannerDetails'
import AddToCard from './Components/AddToCard'
import AddToWishlist from './Components/AddToWishlist'
import CheckoutPage from './Components/CheckoutPage'
import Offers from './Components/Offers'
import NewLaunchesProduct from './Components/NewLaunchesProduct'
import ViewAllProduct from './Components/ViewAllProduct'

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/registration" element={<GoogleRes />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/otp-varify" element={<Otpvarify />} />
      <Route exact path="/header" element={<Header />} />
      <Route exact path="/footer" element={<Footer />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/AllSection" element={<AllSection />} />
      <Route exact path="/filter-page/:item_name" element={<FilterPage/>} />
      <Route exact path="/filter-brand/:brand_name" element={<FilterBrand/>} />
      <Route exact path="/product-item/:product_id" element={<ProductDetails/>} />
      <Route exact path="/banner-item/:product_categories" element={<BannerDetails/>} />
      <Route exact path="/favarate-profile" element={<FavrateProfile/>}/>
      <Route exact path="/profile" element={<FavrateProfile/>}/>
      <Route exact path="/addto-cart" element={<AddToCard/>}/>
      <Route exact path="/checkout" element={<CheckoutPage/>}/>
      <Route exact path="/addto-wishlist" element={<AddToWishlist/>}/>
      <Route exact path="/offers" element={<Offers/>}/>
      <Route exact path="/promo/new-launches-at-purplle-1" element={<NewLaunchesProduct/>}/>
      <Route exact path="view-all-product/:place" element={<ViewAllProduct/>}/>
    </Routes>
  </BrowserRouter>
);
export default App;
