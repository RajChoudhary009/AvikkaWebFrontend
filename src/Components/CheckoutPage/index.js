import React, { useEffect, useState } from 'react';
import axios from "axios";
import { BsCheck2 } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaCirclePlus } from "react-icons/fa6";

import Header from '../Header';
import './index.css';

const CheckoutPage = () => {
  const [storeDetail, setStoreDetails] = useState({})
  const [allStoreDetails, setAllStoreDetails] = useState([])
  const [newIndex, setNewIndex] = useState()
  const [totalPrice, setTotalPrice] = useState(0);
  const [displayCart, setDisplayCart] = useState([])
  const [userAdd, setUserAdd] = useState(true)
  const [userAddComplite, setUserAddComplite] = useState(false)
  const [changeAdr, setChangeAdr] = useState(false)
  const [selectedAddressType, setSelectedAddressType] = useState('Home');
  const [userAddress, setUserAddress] = useState({
    pincode: '',
    city: '',
    state: '',
    house_flat_office_no: '',
    address: '',
    landmark: '',
    contact_name: '',
    mobile_num: '',
    other: '',
    address_type: 'Home',
  });

  const onPaymentHendlle = (pay, add, product) => {
    console.log("pay",pay)
    console.log("addm", add)
    console.log("prod", product)
    alert("yes")
  }

  const addressView = () => {
    if (allStoreDetails.length > 0) {
      setUserAdd(false)
      setUserAddComplite(true)
    }
  }

  // console.log("mahiraj", storeDetail)

  const deleteAddress = async (id) => {
    try {
      const token = localStorage.getItem('token');

      // Check if the token exists before making the API call
      if (!token) {
        console.error('Token is missing.');
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Use the DELETE method to delete the address
      const response = await axios.delete(`http://localhost:8000/removeaddress/${id}`, config);

      // Handle the response or perform additional actions if needed
      if (response) {
        setNewIndex(0)
        setChangeAdr(false)
        setUserAddComplite(true)
        fetchData()
        // alert('Address deleted successfully Please Refress it', response.data);

      }

    } catch (error) {
      console.error('Error deleting address:', error);
      // Handle the error or perform additional actions if needed
    }
  };

  const handleAddressSelection = (index) => {
    localStorage.setItem('selectedAddressIndex', index);
    setNewIndex(index);
    setChangeAdr(false)
    setUserAddComplite(true)
    // console.log("ind",index)
  }

  useEffect(() => {
    // Later, when you need to retrieve the selected address index
    const selectedAddressIndex = parseInt(localStorage.getItem('selectedAddressIndex'), 10);
    setNewIndex(selectedAddressIndex);
  }, []);
  // console.log("use",newIndex)

  const changeAddress = () => {
    setUserAddComplite(false)
    setChangeAdr(true)
  }

  useEffect(() => {
    const calculateTotalPrice = () => {
      let totalProduct = 0;
      let totalDiscount = 0;

      displayCart.forEach(item => {
        if (item && item.product_price) {
          const itemPrice = item.product_price - (item.product_price * item.discount / 100);
          const itemTotalPrice = itemPrice * (item.quantity > 0 ? item.quantity : 1);
          totalProduct += itemTotalPrice;
          totalDiscount += item.product_price * item.discount / 100 * (item.quantity > 0 ? item.quantity : 1);
        }
      });
      setTotalPrice(totalProduct - totalDiscount); // Total price is the difference between total product price and total discount price
    };

    calculateTotalPrice();
  }, [displayCart]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
    setDisplayCart(cartItemsFromLocalStorage);

  }, []);

  const addNewAddress = () => {
    setUserAdd(true)
    setUserAddComplite(false)
    setChangeAdr(false)
  }


  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');

      // Check if the token exists before making the API call
      if (!token) {
        console.error('Token is missing.');
        return;
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      const response2 = await axios.get('http://localhost:8000/getalladdressinfo', config);
      const data = response2.data;
      const dataLength = data.length;

      if (dataLength > 0) {
        setAllStoreDetails(data)
        setStoreDetails(newIndex ? data[newIndex] : data[dataLength - 1]);

        // Update userAddress when storeDetail changes
        // setUserAddress(prevUserAddress => ({
        //   ...prevUserAddress,
        //   contact_name: newIndex ? data[newIndex]?.contact_name : data[dataLength - 1]?.contact_name,
        //   mobile_num: newIndex ? data[newIndex]?.mobile_num : data[dataLength - 1]?.mobile_num,
        // }));
        setUserAddress(prevUserAddress => ({
          ...prevUserAddress,
          contact_name: data[newIndex]?.contact_name,
          mobile_num: data[newIndex]?.mobile_num
        }));
      }
      // setNewIndex(dataLength-1)

    } catch (error) {
      console.error('Error fetching address info:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(storeDetail, "mm2")

  const handlerInput = (event) => {
    const { name, value } = event.target;
    setUserAddress({ ...userAddress, [name]: value });
  };

  const handleAddressTypeClick = (type) => {
    setSelectedAddressType(type);
    setUserAddress((prevUserAddress) => ({
      ...prevUserAddress,
      address_type: type,
    }));
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // console.log("userAddress", userAddress);
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('token');

      // Check if the token exists before making the API call
      if (!token) {
        console.error('Token is missing.');
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      // Second API call with token in headers
      const response = await axios.post('http://localhost:8000/addaddress', userAddress, config);
      const responseData = response.data;

      // console.log(responseData, "useradd");
      if (responseData) {
        setUserAdd(false)
        setUserAddComplite(true)
        fetchData()
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <Header />
      <div className='checkout-main-container'>
        <div className='checkout-home-container'>


          {/* first step */}
          {userAdd && (
            <div className='checkout-address-container'>
              <div className='checkout-hedind-container'>
                <h1 className='checkout-heading'>checkout</h1>
              </div>

              <form onSubmit={handleFormSubmit} style={{ width: "100%" }}>
                <p className='checkout-description'>Delivery to</p>
                <p className='checkout-description'>Addresses info</p>

                <div className='user-input-container'>
                  <input
                    className='user-input'
                    placeholder='Pincode*'
                    name='pincode'
                    value={userAddress.pincode}
                    onChange={handlerInput}
                    required
                  />

                  <div className='user-input-second-container'>
                    <input
                      className='user-input'
                      placeholder='City*'
                      name='city'
                      value={userAddress.city}
                      onChange={handlerInput}
                      required
                    />

                    <input
                      className='user-input'
                      placeholder='State*'
                      name='state'
                      value={userAddress.state}
                      onChange={handlerInput}
                      required
                    />
                  </div>

                  <input
                    className='user-input'
                    placeholder='house_flat_office_no*'
                    name='house_flat_office_no'
                    value={userAddress.house_flat_office_no}
                    onChange={handlerInput}
                    required
                  />

                  <input
                    className='user-input'
                    placeholder='Address*'
                    name='address'
                    value={userAddress.address}
                    onChange={handlerInput}
                    required
                  />
                  <input
                    className='user-input'
                    placeholder='Landmark*'
                    name='landmark'
                    value={userAddress.landmark}
                    onChange={handlerInput}
                    required
                  />

                  <p className='checkout-description' style={{ marginBottom: '30px' }}>
                    Contact info
                  </p>
                  <input
                    className='user-input'
                    placeholder='Name*'
                    name='contact_name'
                    value={userAddress.contact_name}
                    onChange={handlerInput}
                    required
                  />
                  <input
                    className='user-input'
                    placeholder='Mobile Number*'
                    name='mobile_num'
                    value={userAddress.mobile_num}
                    onChange={handlerInput}
                    required
                  />
                  <button style={{ marginBottom: "10px" }} type='button' onClick={() => addressView()}>Address View</button>

                  <p className='checkout-description'>Address type</p>

                  <div className='address-main-btn-container' style={{ marginTop: '20px', marginBottom: "20px" }}>
                    <button
                      type='button'
                      className={`address-btn ${selectedAddressType === 'Home' ? 'selected' : ''}`}
                      onClick={() => handleAddressTypeClick('Home')}
                    >
                      Home
                    </button>
                    <button type='button'
                      className={`address-btn ${selectedAddressType === 'Office' ? 'selected' : ''}`}
                      onClick={() => handleAddressTypeClick('Office')}
                    >
                      Office
                    </button>
                    <button type='button'
                      className={`address-btn ${selectedAddressType === 'Other' ? 'selected' : ''}`}
                      onClick={() => handleAddressTypeClick('Other')}
                    >
                      Other
                    </button>
                  </div>
                  {selectedAddressType !== 'Other' && (
                    <p
                      className='checkout-description'
                      style={{ marginTop: '0px', marginBottom: '50px', fontSize: '15px' }}
                    >
                      Address type preferences are used to plan your delivery. However, shipments can
                      sometimes arrive early or later than planned.
                    </p>
                  )}

                  {selectedAddressType === 'Other' && (
                    <input
                      className='user-input'
                      placeholder='Other Address*'
                      name='other'
                      style={{ marginBottom: "50px", marginTop: "0", paddingTop: "0" }}
                      value={userAddress.other}
                      onChange={handlerInput}
                    />
                  )}

                  <button type="submit" className='save-address'>
                    Save Address
                  </button>
                </div>
              </form>
            </div>
          )}
          {/* second step */}

          {userAddComplite && (
            <div className='fullfeild-container'>
              <div className='fullfeild-home-container'>
                <div className='progress-container'>
                  <div className='round-curcle'>
                    <h1 className='des-curcle' style={{ marginTop: "15px" }}> <BsCheck2 color='#6600ff' size={25} /> </h1>
                  </div>
                  ------------------------------------------------
                  <div className='round-curcle' style={{ backgroundColor: "#6600ff" }}>
                    <h1 className='des-curcle' style={{ color: "#fff" }}>2</h1>
                  </div>
                  ------------------------------------------------
                  <div className='round-curcle'>
                    <h1 className='des-curcle'>3</h1>
                  </div>
                </div>

                <div className='desc-progress-con'>
                  <h1 className='des-curcle' style={{ color: "#6c7a82" }}>Login Details</h1>
                  <h1 className='des-curcle' style={{ color: "#6c7a82", marginLeft: "28px" }}>Delivery Address</h1>
                  <h1 className='des-curcle' style={{ color: "#6c7a82" }}>Payment Method</h1>
                </div>

                <div className='desc-progress-con' style={{ marginTop: "30px" }}>
                  <div className='addres-left-con'>
                    <h1 className='des-curcle' style={{ color: "#000", fontSize: "18px" }}>{storeDetail?.contact_name}</h1>
                    <h1 className='des-curcle' style={{ color: "#000", fontSize: "16px" }}>{storeDetail?.address},{storeDetail?.city},{storeDetail?.landmark},{storeDetail?.state}{storeDetail?.pincode}</h1>
                    <h1 className='des-curcle'>Mob: {storeDetail?.mobile_num}</h1>
                  </div>
                  <div className='addres-left-con border-style'>{storeDetail?.address_type}</div>
                </div>

                <div className='address-con-modified'>
                  <button type='button' className='edit-add-btn' onClick={() => changeAddress()}>Edit/Change (3)</button>
                  <button type='button' className='edit-add-btn' onClick={() => addNewAddress()}>Add new address</button>
                </div>

                <div className='cart-container'>
                  {displayCart.map((eachCart, index) =>
                    <div className='cart-main-con' key={index}>
                      <img className='cart-image' style={{ height: "100px", width: "100px" }} src={`http://localhost:8000/${eachCart?.product_thumnail_img || ''}`} alt={`ImageItem ${eachCart?.product_id + 1}`} />
                      <p className="offers-sub-description modifiy-des" style={{ marginLeft: "40px" }}>{eachCart.product_description}</p>
                    </div>
                  )}
                </div>

                <div className='price-payment-con'>
                  <h1 className='price-payment-heading' style={{ color: "#000", fontSize: "20px", fontWeight: "500" }}>Price Details</h1>
                  <div className='price-payment-container'>
                    <h1 className='price-payment-heading'>Order Total <span className='change-color'> View Details</span></h1>
                    <h1 className='price-payment-heading'>₹{totalPrice.toFixed(0)}</h1>
                  </div>
                  <div className='price-payment-container'>
                    <h1 className='price-payment-heading'>Shipping Charge <span className='change-color'> Know More</span></h1>
                    <h1 className='price-payment-heading'><span className='change-color' style={{ color: "rgb(5, 133, 5)" }}> {totalPrice > 500 ? "Free" : "₹50"}</span></h1>
                  </div>
                  <div className='price-payment-container'>
                    <h1 className='price-payment-heading'>Order Total </h1>
                    <h1 className='price-payment-heading'>₹{totalPrice.toFixed(0)}</h1>
                  </div>
                </div>

                <div className='finel-payment'>
                  <button type='button' className='finel-btn' onClick={() => onPaymentHendlle(totalPrice.toFixed(0),storeDetail, displayCart)}>Ship to this Address</button>
                </div>

              </div>
            </div>
          )}

          {/* start changeAddress */}
          {changeAdr && (
            <div className='change-container-main'>
              <div className='heading-add-chnge-con'>
                <h1 className='change-add-heading' style={{ marginTop: "20px" }}><AiOutlineArrowLeft /></h1>
                <h1 className='change-add-heading'>Change Address</h1>
              </div>

              <div className='heading-add-chnge-con'>
                <h1 className='change-add-heading' style={{ marginTop: "15px", }}> <FaCirclePlus color='#6600ff' /></h1>
                <button type='button' className='addnewadd' onClick={() => addNewAddress()}>Add New Address</button>
              </div>
              {allStoreDetails.map((eachStore, index) =>
                <div className='change-container-home' key={index}>
                  <div className='left-change-con'>
                    <input
                      style={{ marginRight: "20px", marginTop: "17px", color: "#6600ff" }}
                      type="radio"
                      id={`html-${index}`}
                      name="selectedAddress"
                      value={index}
                      onChange={() => handleAddressSelection(index)}
                      checked={index === newIndex}
                    />
                    <label htmlFor={`html-${index}`} className='address-main'>
                      <h1 className='des-curcle' style={{ color: "#000", fontSize: "18px" }}>{eachStore?.contact_name}</h1>
                      <h1 className='des-curcle' style={{ color: "#000", fontSize: "16px" }}>{eachStore?.address},{eachStore?.city},{eachStore?.landmark},{eachStore?.state}{eachStore?.pincode}</h1>
                      <h1 className='des-curcle'>Mob: {eachStore?.mobile_num}</h1>
                    </label>
                  </div>
                  <div className='rigth-change-con' style={{ marginTop: "10px" }}>
                    <div className='addres-left-con border-style'>{eachStore.address_type}</div>
                    <div style={{ marginTop: "30px" }}>
                      <button type='button' className='remove-btn' style={{ color: "#6600ff", border: "none", backgroundColor: "transparent" }}>Edit</button>
                      <button onClick={() => deleteAddress(eachStore.addresses_id)} type='button' className='remove-btn' style={{ color: "#6600ff", border: "none", backgroundColor: "transparent" }}>Remove</button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}
          {/* start changeAddress */}

        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
