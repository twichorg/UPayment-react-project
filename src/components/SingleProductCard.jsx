import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingleProductCard = ({product, postDelete}) => {

  const navigate =useNavigate();  // get the navigate from react-router-dom

  const handleClickToProductDetailPage = () => {
    navigate(`/productDetail`, {state: {product}}); // pass the product to the ProductDetailPage
  }

  return (
    <div className='product-card'>
        <img 
        onClick={() =>postDelete(product.id)} // pass the product id to the postDelete function
        src={product.avatar} 
        alt={product.name} />
        <h3>{product.name}</h3>
        <h4>{product.category}</h4>
        <button
        className='detail-button'
        onClick={handleClickToProductDetailPage}  // pass the product to the handleClickToProductDetailPage function
        >Details</button>
    </div>
  )
}

export default SingleProductCard