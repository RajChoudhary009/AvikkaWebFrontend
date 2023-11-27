import { AiOutlineArrowLeft } from "react-icons/ai";
import { LiaShuttleVanSolid } from "react-icons/lia";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode'; // Import the jwt-decode library

import Header from '../Header';
import './index.css'

const AddToCard = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalProductPrice, setTotalProductPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [mobile_num, setMobile_num] = useState("");
    const [pincode, setPinCode] = useState("")
    const [postalInfo, setPostalInfo] = useState("")

    const dis = (totalProductPrice) - (totalPrice)

    const handlePincode = async () => {
        try {
            const resPin = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
            const data = await resPin.json();

            // Check if data array is not empty before accessing its elements
            if (data && data.length > 0) {
                setPostalInfo(data[0].PostOffice[0].District)
                // console.log(data[0].PostOffice[0].District)
            } else {
                console.error('No data available for the given pincode');
            }
        } catch (error) {
            console.error('Error fetching postal info:', error);
        }
    };

    useEffect(() => {
        // Retrieve cart items from local storage
        const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cartItemsFromLocalStorage);

        // Access token from local storage
        const token = localStorage.getItem('token'); // Replace 'yourTokenKey' with your actual token key

        if (token) {
            // Decode the token to get user information
            const decodedToken = jwt_decode(token);
            const mobile_num = decodedToken.mobile_num;
            setMobile_num(mobile_num)
            // console.log("Decoded Mobile Number:", mobile_num);
        }

    }, []);

    useEffect(() => {
        const calculateTotalPrice = () => {
            let totalProduct = 0;
            let totalDiscount = 0;

            cartItems.forEach(item => {
                if (item && item.product_price) {
                    const itemPrice = item.product_price - (item.product_price * item.discount / 100);
                    const itemTotalPrice = itemPrice * (item.quantity > 0 ? item.quantity : 1);
                    totalProduct += itemTotalPrice;
                    totalDiscount += item.product_price * item.discount / 100 * (item.quantity > 0 ? item.quantity : 1);
                }
            });

            setTotalProductPrice(totalProduct);
            // setTotalDiscountPrice(totalDiscount);
            setTotalPrice(totalProduct - totalDiscount); // Total price is the difference between total product price and total discount price
        };

        calculateTotalPrice();
    }, [cartItems]);

    const delfun = () => {
        localStorage.removeItem('cart');
    }

    const removeFromCart = (index, brand_name) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1); // Remove the item at the specified index
        setCartItems(updatedCartItems);
        // Update local storage
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        alert(`${brand_name} deleted successfully !!`)
    };


    const updateQuantity = (index, newQuantity) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity = newQuantity;
        setCartItems(updatedCartItems);
        // Update local storage
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    // console.log("cart1", cartItems);
    console.log("mobile", mobile_num);
    return (
        <>
            <Header />
            {cartItems.length === 0 ? (
                <div className="empaty-container">
                    <div className="empaty-container-home">
                        <img style={{ width: "70%", height: "68vh" }} alt="addtocart" src="https://previews.123rf.com/images/agshinrajabov/agshinrajabov1811/agshinrajabov181100521/127618306-add-to-card-cyber-monday-vector-icon.jpg" />
                    </div>
                </div>
            ) : (
                <div className='add-card-main-container'>
                    <div className='add-card-home-container'>
                        <h2 className="main-heading" style={{ alignSelf: "flex-start", paddingLeft: "45px" }}><AiOutlineArrowLeft /> My Cart ({cartItems.length})</h2>
                        <div className="pincode-container">
                            <div className="input-con">
                                <h1><LiaShuttleVanSolid color="#cc5aae" /></h1>
                                <input value={pincode} onChange={(e) => setPinCode(e.target.value)} className="input-item" type="text" placeholder="Enter Pincode" />
                            </div>
                            <div className="input-con">
                                <button onClick={() => handlePincode(pincode)} className="remove-button" style={{ fontSize: "19px", fontWeight: "600", color: "#6600FF" }}>Check</button>
                            </div>
                        </div>
                        {postalInfo !== "" && (
                            <div className="pincode-container" style={{marginTop:"10px"}}>{postalInfo}</div>
                        )}

                        <div className='add-to-cart-item'>
                            {cartItems.map((item, index) => (
                                item && (
                                    <div key={index} className="item-container">
                                        <img className='cart-image' src={`http://localhost:8000/${item?.product_thumnail_img || ''}`} alt={`ImageItem ${item?.product_id + 1}`} />
                                        <div className="item-details-con">
                                            <p className="offers-sub-description modifiy-des">{item.product_description}</p>
                                            <div className="price-details">
                                                <p className='price-item-desc' style={{ marginRight: "10px" }}>Rs.{(item.product_price - (item.product_price * item.discount / 100)) * (item.quantity > 0 ? item.quantity : 1)}</p>
                                                <p className='price-underline' style={{ marginRight: "10px" }}>{item.product_price}</p>
                                                <p className='price-green'>Save {item.discount}%off</p>
                                                {/* {updatePrice(item.product_price - (item.product_price * item.discount / 100))} */}
                                            </div>
                                            <div className="price-details">
                                                <button className="remove-button" onClick={() => removeFromCart(index, item.brand_name)}>remove</button>
                                                <button className="remove-button">Move to Wishlist</button>
                                                <div style={{ marginBottom: "10px" }}>
                                                    Qty:
                                                    <select
                                                        value={item.quantity}
                                                        onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                                                    >
                                                        {[1, 2, 3, 4, 5].map((qty) => (
                                                            <option key={qty} value={qty}>
                                                                {qty}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                            ))}
                        </div>

                        <div className="price-display-container">
                            <h1 className="price-details-heading">Price Details</h1>
                            <div className="price-display">
                                <h1 className="total-price-heding">Total MRP: </h1>
                                <h1 className="total-price-digit">₹ {totalProductPrice.toFixed(0)}</h1>
                            </div>

                            <div className="price-display">
                                <h1 className="total-price-heding">Saving on MRP: </h1>
                                <h1 className="total-price-digit" style={{ color: "green" }}>- ₹ {dis.toFixed(0)}</h1>
                            </div>

                            <div className="price-display">
                                <h1 className="total-price-heding">Sub Total: </h1>
                                <h1 className="total-price-digit">₹ {totalPrice.toFixed(0)}</h1>
                            </div>

                            <div className="price-display">
                                <h1 className="total-price-heding">Shipping Charges: </h1>
                                <h1 className="total-price-digit" style={{ color: "green" }}>{totalPrice>500?"Free":"₹50"}</h1>
                            </div>
                            <div className="price-display" style={{ marginBottom: "50px" }}>
                                <button type="button" onClick={() => delfun()}>All Delete and Refresh</button>
                            </div>
                        </div>




                        <div className="procec-to-pay">
                            <div className="total-price-container">
                                <p className="price">Total Price: Rs. <span style={{ color: "green" }}>{totalPrice.toFixed(0)}</span></p>
                                <Link to="/checkout" style={{ textDecoration: "none" }} className="process-to-pay-btn"> Proceed To Pay</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default AddToCard;
