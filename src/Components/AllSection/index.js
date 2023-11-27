import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import Header from "../Header";
import Footer from "../Footer";

import './index.css'

const AllSection = () => {
    const [updatedData, setUpdatedData] = useState([]);
    const [updatedProducts, setUpdatedProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // First API call
                const response1 = await axios.get('http://localhost:8000/api/carousel/all');
                setUpdatedData(response1.data);
                // console.log(response1.data,'data')

                // Second API call
                const response2 = await axios.get('http://localhost:8000/product');
                setUpdatedProducts(response2.data.result);
                // console.log(response2.data.result[7].product_thumnail_img, 'product_thumnail_img')

            } catch (error) {
                console.error('Error fetching images:', error);;
            }
        };

        fetchData();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 3000,
    };

    const handleSlideClick = (slideNumber) => {
        alert(`Clicked on slide ${slideNumber}`);
        // You can perform any action here based on the clicked slide
    };

    const renderImageCards = () => {
        // Display 5 image cards at a time
        return updatedProducts.map((eachProduct, index) => (
            eachProduct.place === 'Featured' ? (
                <div key={index} className="carousel-item">
                    <div className="image-card">
                        <Link to="/produ"><img className='image-prod' src={`http://localhost:8000/${eachProduct.product_thumnail_img}`} alt={`thumb ${index + 1}`} /></Link>
                        <p onClick={() => console.log(eachProduct.product_id)}>mmmmmm</p>
                    </div>
                </div>
            ) : null
        ));
    };

    return (
        <>

            <div className="home-main-container1" >
                <div className="home-item-container1" >

                    <div className='carousel-main-container'>
                        <Slider {...settings}>
                            {updatedData.map((eachData, index) => (
                                eachData.place === 'first' ? (
                                    <div className="carousel-item1" key={index}>
                                        <Link to="/pro" onClick={(e) => console.log(e)}> <img className='carousel-image' src={`http://localhost:8000/uploads/${eachData.image_url}`} alt={`ImageItem ${index + 1}`} /></Link>
                                    </div>
                                ) : null
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            {/* <Header /> */}
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false} // Disable the thumbnail view
                emulateTouch={true} // Enable touch emulation for desktop
                centerMode={true} // Center the active item
                centerSlidePercentage={20}
            >
                {renderImageCards()}
            </Carousel>

            <h1 className='main-heading'>FEATURED</h1>
            <div className='carousel-main-container'>
                <Slider {...settings1}>
                    {updatedProducts.map((eachProduct, mainIndex) => (
                        eachProduct.place === 'Featured' ? (
                            <div className="carousel-item2" key={mainIndex} onClick={() => handleSlideClick(3)}>
                                <Link to={`/pro/${eachProduct.product_id}`}><img className='carousel-image2' src={`http://localhost:8000/${eachProduct.product_thumnail_img}`} alt={`ImageItem ${mainIndex + 1}`} /></Link>
                                {/* <p className='offers-description'>{eachProduct.offer} offers</p>
                    <p className='offers-sub-description'> {eachProduct.product_description.slice(0, 50)}</p> */}
                                {/* <div className='crosusel-item2-lower-container'>
                      <h5 className='amount-heading'>Rs.{eachProduct.product_price}</h5>
                      <h5 className='amount-heading-underline'>Rs103</h5>
                      <h5 onClick={() => console.log('hekko')} className='Amount-off'>{eachProduct.discount}% off</h5>
                    </div> */}

                                {/* <button className='add-to-cart-button' type='button' onClick={() => console.log('hekko')}>Add to Cart</button> */}
                            </div>
                        ) : null
                    ))}
                </Slider>
            </div>


            <Footer />
        </>
    )
}
export default AllSection