import React, { useContext, useState } from 'react'
import { DataContext } from '../App';
import SingleProductCard from './SingleProductCard';

const ProductsList = ({postDelete}) => {
   const data = useContext(DataContext);  // useContext is used to access the data from the DataContext
   const [inputValue, setInputValue] = useState('');  // inputValue is the value of the input
   const [selectValue, setSelectValue] = useState('Electronic');   // selectValue is the value of the select

   const handleInputChange = (e) => {
      setInputValue(e.target.value);
   }
   //console.log(inputValue);
    const handleSelectChange = (e) => {
      setSelectValue(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
    }

  return (
    <>
    <form
    onSubmit={handleSubmit} 
    className='filters-container'>

    <input 
    className='filter-input'
    value={inputValue}
    onChange={handleInputChange}
    type='text'
    placeholder= 'search'/>

    <select
    className='select-filter' 
    onChange={handleSelectChange} 
    value={selectValue}>
    <option disabled  >Category</option>
    <option >Electronic</option>
    <option >Clothing</option>
    <option >Accessories</option>
    </select>
    </form>

    <div className='productList-container'>
      {data  
      .filter(item => item.category === selectValue)  // filter the data based on the selectValue
      .filter(item => item.name.includes(inputValue)) // filter the data based on the name
      .map(product => (
        <SingleProductCard key={product.id} product={product} postDelete = {postDelete} />
      ))}
    </div>
    
    </>
  )
}

export default ProductsList