import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

import './index.css'

const FavrateProfile = () => {
    const [wishlistCard, setWishListCard] = useState([]);

    useEffect(() => {
        // Retrieve cart items from local storage
        const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishListCard(cartItemsFromLocalStorage);

    }, []); // Empty dependency array to run the effect only once on mount

    const addToCart = (item) => {
        // Get existing cart items from local storage
        const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = [...existingCartItems, item.result];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        alert(` Add Successfully!!`);
    };

    const removeFromCart = (index, brand_name) => {
        const updatedWishlist = [...wishlistCard];
        updatedWishlist.splice(index, 1); // Remove the item at the specified index
        setWishListCard(updatedWishlist);
        // Update local storage
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        alert(`${brand_name} deleted successfully !!`)
    };

    return (
        <>
            <Header />
            <div className="favrate-main-container">
                <div className="favrate-profile-container" style={{ width: "70%", backgroundColor: "#fff", alignItems: "center" }}>
                    <div className="my-fav-cont">
                        <h1 className="my-fav-heading-main">My Favrate</h1>
                    </div>

                    {wishlistCard.map((item, index) =>
                        <div key={index} className="item-container" style={{ paddingLeft: "40px" }}>
                            <img className='cart-image' src={`http://localhost:8000/${item.product_thumnail_img}`} alt={`ImageItem ${item.product_id + 1}`} />
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
                                    <button className="remove-button" onClick={() => addToCart(item)}>add to card</button>

                                </div>
                            </div>
                        </div>
                    )}

                </div>


                {/* bottom section */}
                <div className="favrate-profile-bootom-cont">
                    <div className="profile-bootom1">
                        <img alt="avtar" src="https://media6.ppl-media.com/mediafiles/ecomm/home/1499247950_secure-payment.jpg" />
                        <h1 className="payment-safe-heading">100% Secure Payment</h1>
                        <p className="payment-safe-description">All major credit & debit cards accepted.</p>
                    </div>

                    <div className="profile-bootom1">
                        <img className="payment-image" alt="avtar" src="https://media6.ppl-media.com/mediafiles/ecomm/home/1499247975_beauty-assistant.jpg" />
                        <h1 className="payment-safe-heading">Beauty Assistant</h1>
                        <p className="payment-safe-description">Tell me what you are looking for and i will work my magic to help you find your perfect match.</p>
                    </div>

                    <div className="profile-bootom1">
                        <img alt="avtar" src="https://media6.ppl-media.com/mediafiles/ecomm/home/1499247997_help-center.jpg" />
                        <h1 className="payment-safe-heading">Help Center</h1>
                        <p className="payment-safe-description">Got a question? Look no further. Browse FAQs or submit your query.</p>
                    </div>
                </div>

                <div className="favrate-profile-bootom-cont1">
                    <div className="sub-favrate-cont1">
                        <div className="sub-favrate-item">
                            <h1 className="helpcenter-heding">DISCOVER:</h1>
                            <p className="helpcenter-desc">Got a question? Look no further. Browse FAQs or submit your query.Got a question? Look no further. Browse FAQs or submit your query.Got a question? Look no further. Browse FAQs or submit your query.</p>
                        </div>
                        <div className="sub-favrate-item">
                            <h1 className="helpcenter-heding">SHOP MAKEUP:</h1>
                            <p className="helpcenter-desc">Got a question? Look no further. Browse FAQs or submit your query.</p>
                        </div>
                        <div className="sub-favrate-item">
                            <h1 className="helpcenter-heding">SKIN CARE:</h1>
                            <p className="helpcenter-desc">Got a question? Look no further. Browse FAQs or submit your query.Got a question? Look no further. Browse FAQs or submit your query.Got a question? Look no further. Browse FAQs or submit your query.</p>
                        </div>
                        <div className="sub-favrate-item">
                            <h1 className="helpcenter-heding">HAIR PRODUCTS:</h1>
                            <p className="helpcenter-desc">Got a question? Look no further. Browse FAQs or submit your query.Got a question? Look no further. Browse FAQs or submit your query.Got a question? Look no further. Browse FAQs or submit your query.</p>
                        </div>
                        <div className="sub-favrate-item">
                            <h1 className="helpcenter-heding">FRAGRANCE:</h1>
                            <p className="helpcenter-desc">Got a question? Look no further. Browse FAQs or submit your query.Got a question? Look no further. Browse FAQs or submit your query.Got a question? Look no further. Browse FAQs or submit your query.</p>
                        </div>
                        <div className="sub-favrate-item">
                            <h1 className="helpcenter-heding">ELECTRONICS:</h1>
                            <p className="helpcenter-desc">Got a question? Look no further. Browse FAQs or submit your query.</p>
                        </div>
                    </div>
                </div>
                {/* bootom section */}
            </div>
            <Footer />
        </>
    )
}
export default FavrateProfile