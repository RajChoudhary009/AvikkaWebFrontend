import { Link } from 'react-router-dom';
import './index.css'

const ProductItem = props => {
  const { eachProduct } = props

  const addToCart = (item) => {
    // Get existing cart items from local storage
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCartItems, item];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    // alert('Item added to cart!');
    alert(`${item.product_categories}Add Successfully!!`)
  };

  return (
    <div className="carousel-item2" >
      <Link to={`/product-item/${eachProduct.product_id}`}><img className='carousel-image2' src={`http://localhost:8000/${eachProduct.product_thumnail_img}`} alt={`ImageItem ${eachProduct.product_id + 1}`} /></Link>
      <p className='offers-description'>{eachProduct.offer} offers</p>
      <p className='offers-sub-description'> {eachProduct.product_description.slice(0, 50)}</p>
      <div className='crosusel-item2-lower-container'>
        <h5 className='amount-heading'>Rs.{eachProduct.product_price}</h5>
        <h5 className='amount-heading-underline'>Rs103</h5>
        <h5 className='Amount-off'>{eachProduct.discount}% off</h5>
      </div>
      <button className='add-to-cart-button' type='button' onClick={()=> addToCart(eachProduct) }>Add to Cart</button>
    </div>
  )
}
export default ProductItem