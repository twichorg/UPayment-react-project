import React from 'react'
import Navbar from '../components/Navbar'
import ProductsList from '../components/ProductsList'

const HomePage = ({postDelete}) => {
  return (
    <>
    <Navbar/>
    <ProductsList postDelete = {postDelete}/> 
    </>
  )
}

export default HomePage