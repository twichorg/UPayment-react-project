import React from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom' 

const ProductDetailPage = () => {

  const location = useLocation();   // get the location from react-router-dom
  const product = location.state.product; // get the product from the location

  return (
    <>
    <Navbar/>
    
    <div className='product-detail-page'>
      <img src={product.avatar} alt={product.name}/>
        <hr/>
         <h1>{product.name}</h1>
         <h2>{product.category}</h2>
         <h3>{product.price}</h3>
         <p>{product.description}</p>
    </div>
    </>
  )
}

export default ProductDetailPage