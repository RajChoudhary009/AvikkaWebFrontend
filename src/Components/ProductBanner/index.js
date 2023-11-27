import { Link } from 'react-router-dom';

const ProductBanner = props => {
    const { eachData } = props

    return (
        <div className="carousel-item1" key={eachData.id}>
            <Link to={`/banner-item/${eachData.product_categories}`}>
                <img className='carousel-image' src={`http://localhost:8000/uploads/${eachData.image_url}`} alt={`ImageItem ${eachData.id + 1}`} /> 
            </Link>
        </div>
    )
}
export default ProductBanner
