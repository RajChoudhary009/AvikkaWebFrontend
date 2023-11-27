import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios'; // Import Axios
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Header from "../Header";
import Footer from "../Footer";
import ProductItem from "../ProductItem"
import ProductBanner from "../ProductBanner"

import "./index.css";


const Home = () => {
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


  // ********** first crousel ****************** //
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

  // ********** third crousel3 ****************** //
  const imagesList3 = [
    'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1694440951_loreal-paris-1.jpg',
    'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1694505687_bella-vita-1.jpg',
    'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1694505687_bella-vita-1.jpg',
    'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1694505762_dermdoc-goodbye-pigmentation.jpg',
    'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1694499773_blue-heaven-1.jpg',
    'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1694505798_ny-bae-by-purplle.jpg',
    // Add more image URLs as needed
  ];

  // ********** 5th crousel5 ****************** //
  const imagesList5 = [
    'https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694177613_free-serum_web.jpg',
    'https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694177668_appfirst-web-_999-3.jpg',
    // Add more image URLs as needed
  ];

  // ********** 7th crousel7 ****************** //
  const imagesList7 = [
    'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1694171730_mamaearth_ubtan_facewash-1476x1028.jpeg',
    'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1694438493_lotus_herbals_uv_protection-1476x1028.jpeg',
    'https://media6.ppl-media.com/tr:w-640,ar-369-257,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694171482_gv-ubtan-day-cream_app.jpg',
    'https://media6.ppl-media.com/tr:w-640,ar-369-257,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694520956_738x514-copy.jpg',
    'https://media6.ppl-media.com/tr:w-640,ar-369-257,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694171420_faces_hydra_matte-1476x1028.jpeg',
    'https://media6.ppl-media.com/tr:w-640,ar-369-257,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694502655_exclusivestamp01_hpapp-20.jpg',
    'https://media6.ppl-media.com/tr:w-640,ar-369-257,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694419277_swiss_beauty___b_for_base-1476x1028-1.jpeg',
    'https://media6.ppl-media.com/tr:w-640,ar-369-257,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694516362_lakme_eyeconic-1476x1028-10.jpeg',
    // Add more image URLs as needed
  ];
  // ********** 7th crousel7 ****************** //

  return (
    <>
      <Header />
      <div className="home-main-container">
        <div className="home-item-container">

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
          <img className='imag4' src='https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1693311014_sale-is-live-web.jpg' alt="img4" />
          {/* // ********** first crousel ****************** // */}

          {/* // ************ crosuserl featured ************* // */}
          <h1 className='main-heading' style={{marginBottom:"0px", paddingBottom:"0px"}}>FEATURED</h1>
          <div className='view-all'>
            <Link className='view' to={`view-all-product/${'Featured'}`}>View All</Link>
            <h1 style={{marginTop:"17px", color:"blue"}}><FiArrowRight size={20} /></h1>
          </div>

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

          {/* // ********** second crousel2 BEST SELLERS****************** // */}
          <h1 className='main-heading' style={{marginBottom:"0px", paddingBottom:"0px"}}>BEST SELLERS</h1>
          <div className='view-all'>
            <Link className='view' to={`view-all-product/${'Best seller'}`}>View All</Link>
            <h1 style={{marginTop:"17px", color:"blue"}}><FiArrowRight size={20} /></h1>
          </div>
          <div className='carousel-main-container'>
            <Slider {...settings1}>
              {updatedProducts.map((eachProduct) => (
                eachProduct.place === 'Best seller' ? (
                  <ProductItem key={eachProduct.product_id} eachProduct={eachProduct} />
                ) : null
              ))}
            </Slider>
          </div>
          <img className='imag4' alt='imag4' src='https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694441445_thin-strip-web.png' />
          {/* // ********** second crousel2 BEST SELLERS****************** // */}

          {/* // ********** third crousel3 ****************** // */}
          <img className='imag5' alt='imag4' src='https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694383551_lowest-prices-ever_web.jpg' />
          <div className='carousel-main-container'>
            <Slider {...settings1}>
              {imagesList3.map((imageUrl, index) => (
                <div className="carousel-item3" key={index}>
                  <img className='carousel-image3' src={imageUrl} alt={`ImageItem ${index + 1}`} />

                </div>
              ))}
            </Slider>
          </div>
          {/* // ********** third crousel3 ****************** // */}

          {/* // ********** 5th crousel5 ****************** // */}
          <div className='carousel-main-container'>
            <Slider {...settings}>
              {imagesList5.map((imageUrl, index) => (
                <div className="carousel-item1" key={index}>
                  <img className='carousel-image-mini' src={imageUrl} alt={`ImageItem ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
          {/* // ********** 5th crousel5 ****************** // */}

          {/* // ********** 6th crousel6 ****************** // */}
          <div className='carousel-main-container'>
            <Slider {...settings}>
              {updatedData.map((eachData, index) => (
                eachData.place === 'third' ? (
                  <div className="carousel-item1" key={index}>
                    <img className='carousel-image' src={`http://localhost:8000/uploads/${eachData.image_url}`} alt={`ImageItem ${index + 1}`} />
                  </div>
                ) : null
              ))}
            </Slider>
          </div>
          {/* // ********** 6th crousel6 ****************** // */}

          {/* // ********** FACE CARE****************** // */}
          <h1 className='main-heading'>Face Care</h1>
          <div className='carousel-main-container'>
            <Slider {...settings1}>
              {updatedProducts.map((eachProduct, index) => (
                eachProduct.place === 'Best seller' ? (
                  <ProductItem key={eachProduct.product_id} eachProduct={eachProduct} />
                ) : null
              ))}
            </Slider>
          </div>
          <img className='imag4' alt='imag4' src='https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694441445_thin-strip-web.png' />
          {/* // ********** FACE CARE****************** // */}

          {/* // ********** 7th crousel7 ****************** // */}
          <div className='seven-crousel'>
            {imagesList7.map((imageUrl, index) => (
              <div className="seven-crousel-item" key={index}>
                <img className='seven-carousel-image-mini' src={imageUrl} alt={`ImageItem ${index + 1}`} />
              </div>
            ))}
            <img alt='imag4' src='https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694207290_artboard-1.jpg' />
          </div>

          {/* // ********** 7th crousel7 ****************** // */}
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Home;


