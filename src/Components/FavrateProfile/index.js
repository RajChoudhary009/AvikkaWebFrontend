import React, { useState } from "react";
import { BsBox } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { FcRating, FcBusinesswoman } from "react-icons/fc";
import { AiOutlineHeart, AiOutlineStar, AiOutlineLock } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

import Header from "../Header";
import Footer from "../Footer";

import './index.css'

const FavrateProfile = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <Header />
      <div className="favrate-main-container">
        {isActive && <div className="favrate-profile-container">
          <div className="main-profile">
            <div>
              <h1 className="name-heading">Guest</h1>
              <h1 className="number-heading">9110189245</h1>
            </div>
            <img className="avtar-profile" src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1493299751_female.png" alt="avtar" />
          </div>

          <div className="edit-profile-section">
            <h1 className="name-heading left-align">Edit Profile</h1>
          </div>
          {/* ******************first start************************************************ */}
          <div className="support-container">

            <div className="support-profile">
              <div className="support-item-cont">
                <h1 className="name-heading"><BsBox /></h1>
                <div className="sub-item-support-cont">
                  <h1 className="name-heading my-order padding-0">My Orders</h1>
                  <p className="number-heading my-description padding-0">Track, cancel and return orders</p>
                </div>
              </div>

              <h1 className="number-heading"><IoIosArrowForward /></h1>
            </div>

            <div className="support-profile">
              <div className="support-item-cont">
                <h1 className="name-heading"><BiSupport /></h1>
                <div className="sub-item-support-cont">
                  <h1 className="name-heading my-order padding-0">Customer Support</h1>
                  <p className="number-heading my-description padding-0">Help regarding your purchase</p>
                </div>
              </div>

              <h1 className="number-heading"><IoIosArrowForward /></h1>
            </div>

            <div className="support-profile">
              <div className="support-item-cont">
                <h1 className="name-heading"><FcRating /></h1>
                <div className="sub-item-support-cont">
                  <h1 className="name-heading my-order padding-0">Elite Membership</h1>
                  <p className="number-heading my-description padding-0">Offers and rewards</p>
                </div>
              </div>

              {/* <h1 className="number-heading"><IoIosArrowForward/></h1> */}
              <h1 className="name-heading left-align">Explore</h1>
            </div>

          </div>
          {/* ******************first end************************************************ */}

          {/* ******************second start********************************************* */}

          <div className="support-container">

            <div className="support-profile">
              <div className="support-item-cont">
                <h1 className="name-heading"><AiOutlineHeart /></h1>
                <div className="sub-item-support-cont">
                  <h1 className="name-heading my-order padding-0">My Wishlist</h1>
                  <p className="number-heading my-description padding-0">Your favourite products</p>
                </div>
              </div>

              <h1 className="number-heading"><IoIosArrowForward /></h1>
            </div>

            <div className="support-profile">
              <div className="support-item-cont">
                <h1 className="name-heading"><AiOutlineStar /></h1>
                <div className="sub-item-support-cont">
                  <h1 className="name-heading my-order padding-0">My Reviews</h1>
                  <p className="number-heading my-description padding-0">Your views about the products</p>
                </div>
              </div>

              <h1 className="number-heading"><IoIosArrowForward /></h1>
            </div>

            <div className="support-profile">
              <div className="support-item-cont">
                <h1 className="name-heading"><FcBusinesswoman /></h1>
                <div className="sub-item-support-cont">
                  <h1 className="name-heading my-order padding-0">My Beauty Profile</h1>
                  <p className="number-heading my-description padding-0">Profile that represents you</p>
                </div>
              </div>

              <h1 className="number-heading"><IoIosArrowForward /></h1>
            </div>

            <div className="support-profile">
              <div className="support-item-cont">
                <h1 className="name-heading"><MdPayment /></h1>
                <div className="sub-item-support-cont">
                  <h1 className="name-heading my-order padding-0">My Payments</h1>
                  <p className="number-heading my-description padding-0">Details about your payments and saved cards</p>
                </div>
              </div>

              <h1 className="number-heading"><IoIosArrowForward /></h1>
            </div>

            <div className="support-profile">
              <div className="support-item-cont">
                <h1 className="name-heading"><CiLocationOn /></h1>
                <div className="sub-item-support-cont">
                  <h1 className="name-heading my-order padding-0">My Addresses</h1>
                  <p className="number-heading my-description padding-0">Save addresses for faster checkout</p>
                </div>
              </div>

              <h1 className="number-heading"><IoIosArrowForward /></h1>
            </div>

          </div>
          {/* *************************** second end********************************************* */}

          {/* ***************** third start ***************************************************** */}
          <div className="support-container">

            <div className="support-profile">
              <div className="support-item-cont">
                <h1 className="name-heading"><MdPayment /></h1>
                <div className="sub-item-support-cont">
                  <h1 className="name-heading my-order padding-0">Purplle Credit</h1>
                  <p className="number-heading my-description padding-0">Manage your refunds and gift cards</p>
                </div>
              </div>

              <h1 className="number-heading"><IoIosArrowForward /></h1>
            </div>

            <div className="support-profile">
              <div className="support-item-cont">
                <h1 className="name-heading"><AiOutlineLock /></h1>
                <div className="sub-item-support-cont">
                  <h1 className="name-heading my-order padding-0">Change Password</h1>
                  <p className="number-heading my-description padding-0">Manage your password</p>
                </div>
              </div>

              <h1 className="number-heading"><IoIosArrowForward /></h1>
            </div>

          </div>
          {/* ************************** third end ****************************************** */}

          {/* ************************** forth start ****************************************** */}
          <div className="support-container">
            <p className="number-heading my-description ">About Us</p>
            <p className="number-heading my-description ">Privacy Policy</p>
            <p className="number-heading my-description ">Terms & Conditions</p>
            <p className="number-heading my-description ">Feedback</p>
          </div>
          {/* ************************** forth end ******************************************** */}

          {/* ************************** logout start ******************************************** */}
          <div className="support-container">
            <button className="logout-btn">Logout</button>
          </div>
          {/* ************************** logout end ******************************************** */}

        </div>
        }
        {/* bootom section */}
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