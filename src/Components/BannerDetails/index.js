import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import { ColorRing } from 'react-loader-spinner';

import './index.css'
import Header from '../Header';
import ProductItem from '../ProductItem'
import Footer from '../Footer';

const BannerDetails = () => {
    const { product_categories } = useParams();
    const [loading, setLoading] = useState(true);
    const [updatedBanner, setUpdatedBanner] = useState([]);
    const [updatedProducts, setUpdatedProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // First API call
                const response1 = await axios.get(`http://localhost:8000/api/carousel/all/filter?product_categories=${product_categories}`);
                setUpdatedBanner(response1.data);
                // console.log("updateBanner", response1.data)
                setLoading(false)
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
    }, [product_categories]);

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
            <div className='banner-section-container'>
                <div className='banner-section-home-container'>
                    {loading ? (
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        />
                    ) : (
                        <>
                            <div className='banner-section-crousel'>
                                <div className='carousel-main-container'>
                                    <Slider {...settings}>
                                        {updatedBanner.map((eachData, index) => (
                                            <div className="carousel-item1" key={index} onClick={() => alert(`clicked`)}>
                                                <Link to={`/banner-item/${eachData.product_categories}`}><img className='carousel-image' src={`http://localhost:8000/uploads/${eachData.image_url}`} alt={`ImageItem ${index + 1}`} /> </Link>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>

                           <Link to="hh"> <h1 className='main-heading'>BEST SELER1</h1> </Link>
                            <div className='banner-section-crousel'>
                                <div className='carousel-main-container'>
                                    <Slider {...settings1}>
                                        {updatedProducts.map((eachProduct) => (
                                            eachProduct.place === 'Best seller' ? (
                                                <ProductItem key={eachProduct.product_id} eachProduct={eachProduct} />               
                                            ) : null
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default BannerDetails