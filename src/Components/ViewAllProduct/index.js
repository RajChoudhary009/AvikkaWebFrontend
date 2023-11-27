import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import Axios
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick';

import { ColorRing } from 'react-loader-spinner';

import './index.css'
import Header from '../Header/index.js';
import ProductItem from '../ProductItem'
// import Footer from '../Footer';

const ViewAllProduct = () => {
    const { place } = useParams();
    const [loading, setLoading] = useState(true);
    const [newUpdatedProducts, setNewUpdatedProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Second API call
                const response2 = await axios.get('http://localhost:8000/product');
                setNewUpdatedProducts(response2.data.result);
                setLoading(false)

            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchData();
    }, [place]);

    return (
        <>
            <Header />
            <div className='view-all-product'>
                <div className='view-all-product-new'>

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
                            <div className='view-all-product-new-main'>
                                {newUpdatedProducts.slice(0, 100).map((eachProduct) => (
                                    eachProduct.place === place?(
                                    <div className='product-item' key={eachProduct.product_id}>
                                        <ProductItem key={eachProduct.id} eachProduct={eachProduct} />
                                    </div>
                                    ):null
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
export default ViewAllProduct