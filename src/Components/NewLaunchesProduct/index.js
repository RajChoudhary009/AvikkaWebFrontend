import React, { useEffect, useState } from 'react';

import Slider from 'react-slick';
import axios from 'axios'; // Import Axios
import { Link } from 'react-router-dom';

import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import Header from '../Header'
import ProductItem from "../ProductItem"
import './index.css'
import Footer from '../Footer';

const NewLaunchesProduct = () => {
    const [updatedProducts, setUpdatedProducts] = useState([]);

    const [activeCetegory, setActiveCetegory] = useState(false)
    const [activeBrands, setActiveBrands] = useState(false)
    const [activePriceRange, setActivePriceRange] = useState(false)
    const [activeBenefites, setActiveBenefites] = useState(false)
    const [activeProductsType, setActiveProductsType] = useState(false)
    const [activeMoreFill, setActiveMoreFill] = useState(false)
    const [activeShortBy, setActiveShortBy] = useState(false)

    const [fillterData, setFillterData] = useState([])
    const [fillterItem, setFillterItem] = useState([])
    const [activeFillter, setActiveFillter] = useState(false)

    // const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Second API call
                const response2 = await axios.get('http://localhost:8000/api/products/all/filter/new');
                setUpdatedProducts(response2.data.result);
                // console.log(response2.data.result[7].product_thumnail_img, 'product_thumnail_img')

            } catch (error) {
                console.error('Error fetching images:', error);;
            }
        };

        fetchData();
    }, []);

    const handleCategoryChange = (data) => {
        setFillterData((prevData) => {
            if (prevData.includes(data)) {
                return prevData.filter((item) => item !== data);
            } else {
                return [...prevData, data];
            }
        });
    };

    const handleApply = async (applyType) => {
        try {
            // Retrieve the token from local storage
            const token = localStorage.getItem('token');
            console.log('Token:', token);
    
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
            const data = { fillterData, applyType }
    
            // Second API call with token in headers
            const response = await axios.post('http://localhost:8000/api/products/all/filter/data',data , config );
    
            console.log('Response:', response.data);
            setFillterItem(response.data);
            setActiveFillter(true);
        } catch (error) {
            console.error('Error fetching data frontend:', error);
        }
    };

    const clearFillter = () => {
        setFillterData([]);
        setFillterItem([]);
        setActiveFillter(false)
    }

    console.log("Selected Filters:", fillterData);
    console.log("item", fillterItem)

    const handleCategories = () => {
        setActiveCetegory(!activeCetegory)
        setActiveBrands(false)
        setActivePriceRange(false)
        setActiveBenefites(false)
        setActiveProductsType(false)
        setActiveMoreFill(false)
        setActiveShortBy(false)
        setFillterData([])
    }
    const handleBrands = () => {
        setActiveBrands(!activeBrands)
        setActiveCetegory(false)
        setActivePriceRange(false)
        setActiveBenefites(false)
        setActiveProductsType(false)
        setActiveMoreFill(false)
        setActiveShortBy(false)
        setFillterData([])
    }
    const handlePriceRange = () => {
        setActivePriceRange(!activePriceRange)
        setActiveBrands(false)
        setActiveCetegory(false)
        setActiveBenefites(false)
        setActiveProductsType(false)
        setActiveMoreFill(false)
        setActiveShortBy(false)
        setFillterData([])
    }
    const handleBenefites = () => {
        setActiveBenefites(!activeBenefites)
        setActivePriceRange(false)
        setActiveBrands(false)
        setActiveCetegory(false)
        setActiveProductsType(false)
        setActiveMoreFill(false)
        setActiveShortBy(false)
        setFillterData([])
    }
    const handleProductType = () => {
        setActiveProductsType(!activeProductsType)
        setActiveBenefites(false)
        setActivePriceRange(false)
        setActiveBrands(false)
        setActiveCetegory(false)
        setActiveMoreFill(false)
        setActiveShortBy(false)
        setFillterData([])
    }
    const handleMoreFillter = () => {
        setActiveMoreFill(!activeMoreFill)
        setActiveProductsType(false)
        setActiveBenefites(false)
        setActivePriceRange(false)
        setActiveBrands(false)
        setActiveCetegory(false)
        setActiveShortBy(false)
        setFillterData([])
    }
    const handleShortBy = () => {
        setActiveShortBy(!activeShortBy)
        setActiveMoreFill(false)
        setActiveProductsType(false)
        setActiveBenefites(false)
        setActivePriceRange(false)
        setActiveBrands(false)
        setActiveCetegory(false)
        setFillterData([])
    }

    const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
    };

    const caetegory = ['Primer', 'Eyeshadow', 'Lipstick', 'Nail Polish', 'Shampoo', 'Make gift and Value Sets', 'Eyes Liner',
        'Brush', 'Brush', 'Facewash']

    const alfabeats = ['All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Z']

    const brand = ['Purplle', 'Good Vibes', 'May Belline', 'Face Canada', 'Nybea', 'Stay Quirky', 'Belora', 'Blue Heven', 'Ranee', 'Pigment Play', 'Charmesi', 'Alps Goodnes']

    const price = ['RS.60-Rs.100', 'RS.100-RS.500', 'RS.500-RS.1000', 'RS.1000-RS.2000', 'RS.2000-RS.3000']

    const Benefite = ['Hydrating', 'Moisturizing', 'Nourshing', 'Volumizing', 'Smudgeproof', 'Waterproof', 'Sun Protection', 'Non Sticky']

    const productType = ['Pencil Kajal', 'Liquid Lipstic', 'Lip Scrub', 'Lip Balm', 'Brow Pencial', 'Eyeshadow', 'Daycream', 'Facewash', 'Mosturizer']

    const shortBy = ['Discount', 'High Price', 'Low Price', 'Average Rating']

    return (
        <>
            <Header />
            <div className='launch-new-product-main'>
                <div className='launches-new-product-home'>
                    <div className='link-container'>
                        <Link to="/" className="link-tag">Home </Link>
                        <span><AiOutlineRight style={{ marginTop: "8px", marginRight: "10px" }} /></span>
                        <Link to="/offers" className="link-tag">Offers </Link>
                        <span><AiOutlineRight style={{ marginTop: "8px", marginRight: "10px" }} /></span>
                        <Link to="/promo/new-launches-at-purplle-1" style={{ color: "#bfc6c9" }} className="link-tag">New Launches at Purrple</Link>
                    </div>
                    <h1 className='new-launch-heading'>New Launches At Purplle</h1>
                    <p className='new-launch-description'>Showing <span style={{ color: "blue" }}>{updatedProducts.length}</span> Product</p>

                    {activeFillter && (
                        fillterData.length > 0 && (
                            <div className='fillter-notification-con'>
                                <p style={{ fontSize: "16px", fontWeight: "500", marginRight: "15px", paddingTop: "25px" }}>Showing result: </p>

                                {fillterData.map((data) =>
                                    <li style={{ color: "#2196F3", fontSize: "16px", fontWeight: "500", listStyleType: "none", marginRight: "15px", paddingTop: "25px" }}>{data}</li>
                                )}
                                <div>
                                    <button className='clear-btn' type='button' onClick={() => clearFillter()}>clear fillter</button>
                                </div>
                            </div>
                        )
                    )}



                    {/* StartFillterHeader */}
                    <div className='fillter-heder-container'>
                        <div className='fillter-button-container'>
                            <button className='fillter-header-button-con' onClick={() => handleCategories()}>Categories<span><AiOutlineDown /></span></button>
                            <h1 className='fillter-header-button'>All</h1>
                        </div>

                        <div className='fillter-button-container'>
                            <button className='fillter-header-button-con' onClick={() => handleBrands()}>Brands<span><AiOutlineDown /></span></button>
                            <h1 className='fillter-header-button'>All</h1>
                        </div>

                        <div className='fillter-button-container'>
                            <button className='fillter-header-button-con' onClick={() => handlePriceRange()}>Price Range<span><AiOutlineDown /></span></button>
                            <h1 className='fillter-header-button'>All</h1>
                        </div>

                        <div className='fillter-button-container'>
                            <button className='fillter-header-button-con' onClick={() => handleBenefites()}>Benefites<span><AiOutlineDown /></span></button>
                            <h1 className='fillter-header-button'>All</h1>
                        </div>

                        <div className='fillter-button-container'>
                            <button className='fillter-header-button-con' onClick={() => handleProductType()}>Products Type<span><AiOutlineDown /></span></button>
                            <h1 className='fillter-header-button'>All</h1>
                        </div>

                        <div className='fillter-button-container modifiy-btn-cont' style={{ width: "35%" }}>
                            <div>
                                <button className='fillter-header-button-con' onClick={() => handleMoreFillter()}>More fillter options<span><AiOutlineDown /></span></button>
                                <h1 className='fillter-header-button'>12 more options</h1>
                            </div>

                            <div className='toggle-container'>
                                <h1 className='fillter-header-button' style={{ fontSize: "22px", paddingRight: "10px", marginTop: "10px" }}>Elite</h1>
                                <>
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>
                                </>
                            </div>
                        </div>

                        <div className='fillter-button-container' style={{ borderRight: "none" }}>
                            <button className='fillter-header-button-con' onClick={() => handleShortBy()}>Short By<span><AiOutlineDown /></span></button>
                            <h1 className='fillter-header-button'>Relevanse</h1>
                        </div>
                    </div>
                    {/* StartFillterHeader */}


                    {/* fillter header popup */}
                    <div className='cetegory-container'>
                        {/* ************************** Cetegories Popup *************************** */}
                        {activeCetegory && (
                            <div className='category-main-container' style={{ width: "22%" }}>
                                <div className='serch-con'>
                                    <AiOutlineSearch size={28} />
                                    <input className='user-search-input' type="seach" placeholder='Search Cetegories' />
                                </div>
                                <button onClick={() => { handleApply("product_categories") }} type='button' className='appliyi-btn' style={{ alignSelf: "flex-start" }}>Apply Filter</button>
                                <div className='input-main-container'>
                                    {caetegory.map((eachCat, index) =>
                                        <div className='user-input-home-con' key={index}>
                                            <input onChange={() => handleCategoryChange(eachCat)} checked={fillterData.includes(eachCat)} type='checkbox' id='eyeshadow' className='user-checkbox' style={{ marginTop: "7px" }} />
                                            <label id='eyeshadow' className='user-checkbox-label'>{eachCat}</label>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        {/* ************************** End Cetegories Popup *************************** */}

                        {/* ************************** Brand Popup *************************** */}
                        {activeBrands && (
                            <div className='category-main-container' style={{ width: "100%", alignItems: "flex-start" }}>
                                <div className='input-serch-container'>
                                    <div className='serch-con' style={{ width: "40%" }}>
                                        <AiOutlineSearch size={28} />
                                        <input className='user-search-input' type="seach" placeholder='Search Brand' />
                                    </div>

                                    <button onClick={() => { handleApply("brand_name") }} type='button' className='appliyi-btn' style={{ marginTop: "20px", height: "33px" }}>Apply Filter</button>

                                    <ul className='alfabets-container' style={{ width: "50%" }}>
                                        {alfabeats.map((eachAlfa, index) =>
                                            <li className='alfabet-item' key={index}>{eachAlfa}</li>
                                        )}
                                    </ul>
                                </div>

                                <div className='filter-brand-container'>
                                    {brand.map((eachBrand, index) =>
                                        <div className='user-input-home-con' key={index}>
                                            <input checked={fillterData.includes(eachBrand)} onChange={() => handleCategoryChange(eachBrand)} type='checkbox' id='eyeshadow' className='user-checkbox' style={{ marginTop: "7px" }} />
                                            <label id='eyeshadow' className='user-checkbox-label'>{eachBrand}</label>
                                        </div>
                                    )}

                                </div>

                            </div>
                        )}
                        {/* ************************** End Brand Popup *************************** */}

                        {/* ************************** Price Popup ******************************* */}
                        {activePriceRange && (
                            <div className='category-main-container'>
                                <div className='category-main-container' style={{ width: "100%" }}>
                                    <div className='serch-con'>
                                        <AiOutlineSearch size={28} />
                                        <input className='user-search-input' type="seach" placeholder='Search Price' />
                                    </div>
                                    <button onClick={() => handleApply("product_price")} type='button' className='appliyi-btn' style={{ alignSelf: "flex-start" }}>Apply Filter</button>
                                    <div className='input-main-container'>
                                        {price.map((eachPrice, index) =>
                                            <div className='user-input-home-con' key={index} style={{ marginTop: "20px" }}>
                                                <input checked={fillterData.includes(eachPrice)} onChange={() => handleCategoryChange(eachPrice)} type='checkbox' id='eyeshadow' className='user-checkbox' style={{ marginTop: "7px" }} />
                                                <label id='eyeshadow' className='user-checkbox-label'>{eachPrice}</label>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* ************************** End Price Popup *************************** */}

                        {/* ************************** Price Benefites Popup *************************** */}
                        {activeBenefites && (
                            <div className='category-main-container'>
                                <div className='category-main-container' style={{ width: "100%" }}>
                                    <div className='serch-con'>
                                        <AiOutlineSearch size={28} />
                                        <input className='user-search-input' type="seach" placeholder='Search Benefites' />
                                    </div>
                                    <button type='button' className='appliyi-btn' style={{ alignSelf: "flex-start" }}>Apply Filter</button>
                                    <div className='input-main-container'>
                                        {Benefite.map((eachbenefite, index) =>
                                            <div className='user-input-home-con' key={index}>
                                                <input type='checkbox' id='eyeshadow' className='user-checkbox' style={{ marginTop: "7px" }} />
                                                <label id='eyeshadow' className='user-checkbox-label'>{eachbenefite}</label>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* ************************** End Benefites Popup *************************** */}

                        {/* ************************** Price Product Type Popup *************************** */}
                        {activeProductsType && (
                            <div className='category-main-container'>
                                <div className='category-main-container' style={{ width: "100%" }}>
                                    <div className='serch-con'>
                                        <AiOutlineSearch size={28} />
                                        <input className='user-search-input' type="seach" placeholder='Search Product Type' />
                                    </div>
                                    <button type='button' className='appliyi-btn' style={{ alignSelf: "flex-start" }}>Apply Filter</button>
                                    <div className='input-main-container'>
                                        {productType.map((eachProductType, index) =>
                                            <div className='user-input-home-con' key={index}>
                                                <input type='checkbox' id='eyeshadow' className='user-checkbox' style={{ marginTop: "7px" }} />
                                                <label id='eyeshadow' className='user-checkbox-label'>{eachProductType}</label>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* ************************** Price Product Type Popup *************************** */}

                        {activeMoreFill && (
                            <div className='category-main-container'>
                                <h1>activeMoreFill</h1>
                            </div>
                        )}


                        {/* ************************** ShortBy Popup *************************** */}
                        {activeShortBy && (
                            <div className='category-main-container'>
                                <div className='category-main-container' style={{ width: "100%" }}>
                                    <div className='serch-con'>
                                        <AiOutlineSearch size={28} />
                                        <input className='user-search-input' type="seach" placeholder='Search ShortBy' />
                                    </div>
                                    <button type='button' className='appliyi-btn' style={{ alignSelf: "flex-start" }}>Apply Filter</button>
                                    <div className='input-main-container'>
                                        {shortBy.map((eachShort, index) =>
                                            <div className='user-input-home-con' key={index} style={{ marginTop: "0px" }}>
                                                <button id='eyeshadow' className='user-checkbox-label'>{eachShort}</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* ************************** ShortBy Popup *************************** */}

                    </div>
                    {/* fillter header popup */}


                    {/* // ************ crosusel featured ************* // */}
                    <h1 className='main-heading' style={{ marginTop: "20px", marginBottom: "40px" }}>FEATURED</h1>
                    {!activeFillter && (
                        <div className='carousel-main-container' style={{ marginLeft: "50px" }}>
                            <Slider {...settings1}>
                                {updatedProducts.map((eachProduct) => (
                                    eachProduct.place === 'Featured' ? (
                                        <ProductItem key={eachProduct.product_id} eachProduct={eachProduct} />
                                    ) : null
                                ))}
                            </Slider>
                        </div>
                    )}

                    {activeFillter && (
                        <div className='carousel-main-container' style={{ marginLeft: "50px" }}>
                            <Slider {...settings1}>
                                {fillterItem.map((eachProduct) => (
                                    eachProduct.place === 'Featured' ? (
                                        <ProductItem key={eachProduct.product_id} eachProduct={eachProduct} />
                                    ) : null
                                ))}
                            </Slider>
                        </div>
                    )}

                    {/* // ************ crosusel featured ************* // */}

                    {/* // ************ crosusel featured ************* // */}
                    <h1 className='main-heading' style={{ marginTop: "20px", marginBottom: "40px" }}>Best Combo Deal</h1>
                    <div className='carousel-main-container' style={{ marginLeft: "50px" }}>
                        <Slider {...settings1}>
                            {updatedProducts.map((eachProduct) => (
                                eachProduct.place === 'Featured' ? (
                                    <ProductItem key={eachProduct.product_id} eachProduct={eachProduct} />
                                ) : null
                            ))}
                        </Slider>
                    </div>
                    {/* // ************ crosusel featured ************* // */}
                </div>
            </div>
            <Footer />
        </>
    )
}
export default NewLaunchesProduct