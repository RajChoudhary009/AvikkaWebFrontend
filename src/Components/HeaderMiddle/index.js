import React, { useState} from "react";
import { Link } from 'react-router-dom'

import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { LiaGrinHeartsSolid } from "react-icons/lia";
import './index.css'

const HeaderMiddle = () => {
    const [isActive, setIsActive] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
  
    const openMenu = () => {
      setMenuVisible(!menuVisible); // Use menuVisible here instead of visible
    };
  
    const showPopup = () => {
      setIsActive(!isActive)
    }

return(
    <div className="header-middle-container bg-color sticky">

    <div className="middle-item-container">
      <img
        src="https://advikka.com/image/catalog/logo.png"
        alt=""
        style={{ width: "150px" }}
      />

    </div>

    <div className="lower-item-bg">
      <ul className="lower-item-container">
        <button className="lower-item" onMouseEnter={openMenu} >SHOP CATEGORIES</button>
        <button className="lower-item">BRANDS</button>
        <button className="lower-item">OFFERS</button>
        <button className="lower-item">NEW</button>
        <button className="lower-item">SPLURGE</button>
        <button className="lower-item">MAGAZINE</button>
        <button className="lower-item">ELITE OFFERS</button>
      </ul>
    </div>

    <div className="middle-item-container">
      <button type="button" className="icon-btn">
        <Link style={{ marginRight: "15px" }}>
          <AiOutlineSearch size={30} color={"black"} />
        </Link>
      </button>

      <button type="button" className="icon-btn">
        <Link to="favarate-profile" style={{ marginRight: "15px" }}>
          <AiOutlineHeart size={30} color={"black"} />
        </Link>
      </button>
      <button type="button" className="icon-btn" onClick={showPopup}>
        <Link style={{ marginRight: "15px" }}>
          <LiaGrinHeartsSolid size={30} color={"black"} />
        </Link>
        {isActive && <ul className="show-popup2">
          <button type="button" className="sign-button">Sign in</button>
          <Link className="item-icon-list" style={{ textDecoration: "none" }}>New Customer?</Link>
          <Link className="item-icon-list pink-color" style={{ textDecoration: "none" }}>Start here</Link>
          <Link className="item-icon-list" style={{ textDecoration: "none" }}>Your Orders</Link>

          <Link className="item-icon-list" style={{ textDecoration: "none" }}>Your Account</Link>
          <Link className="item-icon-list" style={{ textDecoration: "none" }}>Elite Membership</Link>
          <Link className="item-icon-list" style={{ textDecoration: "none" }}>Your Beaity Profile</Link>
          <Link className="item-icon-list" style={{ textDecoration: "none" }}>Your Wishlist</Link>
          <Link className="item-icon-list" style={{ textDecoration: "none" }}>Purplle Credite</Link>
          <Link className="item-icon-list" style={{ textDecoration: "none" }}>Become a Seller?</Link>
          <Link className="item-icon-list pink-color" style={{ textDecoration: "none" }}>Register Now</Link>
        </ul>}
      </button>
      <button type="button" className="icon-btn">
        <Link style={{ marginRight: "15px" }}>
          <AiOutlineHeart size={30} color={"black"} />
        </Link>
      </button>
    </div>
  </div>
)
}
export default HeaderMiddle