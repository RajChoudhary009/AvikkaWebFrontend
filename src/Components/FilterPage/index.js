import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import Axios
// import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import { ColorRing } from 'react-loader-spinner';

import './index.css'
import Header from '../Header/index.js';
import ProductItem from '../ProductItem'
import Footer from '../Footer';

const FilterPage = () => {
    const { item_name } = useParams();
    const [loading, setLoading] = useState(true);
    const [newUpdatedBanner, setNewUpdatedBanner] = useState([]);
    const [newUpdatedProducts, setNewUpdatedProducts] = useState([]);
    const itemNameValue = item_name ? item_name : "";
    const slideShow = newUpdatedProducts.length >=5? 5: 1;

    useEffect(() => {
        const fetchData = async () => {
            try {
                // First API call
                const response1 = await axios.get(`http://localhost:8000/api/carousel/all/filter?product_categories=${itemNameValue}`);

                setNewUpdatedBanner(response1.data);
                setLoading(false)
                console.log("updateBanner", response1.data)

                // Second API call
                const response2 = await axios.get(`http://localhost:8000/api/products/all/filter?product_categories=${itemNameValue}`);
                setNewUpdatedProducts(response2.data);

            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchData();
    }, [itemNameValue]);

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
        slidesToShow: slideShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
   

    // console.log(item_name)
    return (
        <>
            <Header />
            <div className='filter-section-container'>
                <div className='filter-section-home'>
                    {loading ? (
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={["#FF5DF8", "#FF5DF8", "#FF5DF8", "#FF5DF8", "#FF5DF8", "#FF5DF8"]}
                        />
                    ) : (
                        <>
                            <div className='filter-section-crousel'>
                                <div className='carousel-main-container'>
                                    <Slider {...settings}>
                                        {newUpdatedBanner.map((eachData, index) => (
                                            <div className="carousel-item1" key={index} onClick={() => alert(`clicked`)}>
                                                <img className='carousel-image' src={`http://localhost:8000/uploads/${eachData.image_url}`} alt={`ImageItem ${index + 1}`} />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>

                            <h1 className='main-heading'>BEST SELLER</h1>
                            <div className='filter-section-crousel'>
                                <div className='carousel-main-container'>
                                    <Slider {...settings1}>
                                        {newUpdatedProducts.map((eachProduct, index) => (
                                            <ProductItem key={eachProduct.product_id} eachProduct={eachProduct} />
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </>
                    )
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default FilterPage