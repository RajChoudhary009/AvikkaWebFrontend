import React, { useEffect, useState } from 'react';

import Slider from 'react-slick';
import axios from 'axios'; // Import Axios

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Header from '../Header'
import Footer from '../Footer';
import ProductItem from "../ProductItem"
import ProductBanner from "../ProductBanner"
import './index.css'


const Offers = () => {
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
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <>
            <Header />
            <div className='offers-main-container'>
                <div className='offers-home-container'>
                    <img src='https://media6.ppl-media.com/mediafiles/ecomm/promo/1563364997_offers-for-you-d.jpg' alt='Product in use with customer smiling' />
                    {/* // ********** first crousel ****************** // */}
                    <div className='carousel-main-container'>
                        <Slider {...settings}>
                            {updatedData.map((eachData) => (
                                eachData.place === 'first' ? (
                                    <ProductBanner key={eachData.id} eachData={eachData} />
                                ) : null
                            ))}
                        </Slider>
                    </div>
                    <img className='imag4' src='https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1693311014_sale-is-live-web.jpg' alt="offers" />
                    {/* // ********** first crousel ****************** // */}

                    {/* // ************ crosusel featured ************* // */}
                    <h1 className='main-heading'>FEATURED</h1>
                    <div className='carousel-main-container'>
                        <Slider {...settings1}>
                            {updatedProducts.map((eachProduct) => (
                                eachProduct.place === 'Featured' ? (
                                    <ProductItem key={eachProduct.product_id} eachProduct={eachProduct} />
                                ) : null
                            ))}
                        </Slider>
                    </div>
                    {/* // ************ crosusel featured ************* // */}

                     {/* // ************ crosusel featured ************* // */}
                     <h1 className='main-heading'>Best Combo Deal</h1>
                    <div className='carousel-main-container'>
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
            <Footer/>
        </>
    )
}
export default Offers