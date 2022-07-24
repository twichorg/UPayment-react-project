import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';

const CreatePage = () => {
  const [inputName, setInputName] = useState(''); // inputName is the value of the input
  const [inputCategory, setInputCategory] = useState('');   // inputCategory is the value of the input
  const [imageUrl, setImageUrl] = useState(''); // imageUrl is the value of the input
  const [inputPrice, setInputPrice] = useState(''); // inputPrice is the value of the input
  const [inputDescription, setInputDescription] = useState(''); // inputDescription is the value of the input

  const handleInputName = (e) => {
    setInputName(e.target.value);
  }

  const handleInputCategory = (e) => {
    setInputCategory(e.target.value);
  }

  const handleInputImageUrl = (e) => {
    setImageUrl(e.target.value);
  }

  const handleInputPrice = (e) => {
    setInputPrice(e.target.value);
  }

  const handleInputDescription = (e) => { 
    setInputDescription(e.target.value);
  }

  const handleSubmit = (e) => { // handleSubmit is used to submit the data to the server
    e.preventDefault(); // prevent the page from refreshing
  }
  //console.log(inputName, inputCategory, imageUrl, inputPrice, inputDescription);

  const postData = async () => {  // postData is a function that will post the data to the server
    try{
      axios.post('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/', {  // axios.post is a function that will post the data to the server
        name : inputName, // name is the name of the product
        category: inputCategory,  // category is the name of the category
        avatar: imageUrl, // avatar is the imageUrl
        description: inputDescription,  // description is the value of the input
        price: inputPrice,  // price is the value of the input
      })
    }catch(err){
      console.log(err);
    }
   
}

  return (
    <>
    <Navbar/>

    <div className='create-page-container'>
    <form
    onSubmit={handleSubmit} 
    className='create-page-form'>

    <input
    className='create-page-input'
    onChange={handleInputName}
    placeholder='name' 
    type='text'/>
    
    <select 
    className='create-page-select'
    onChange={handleInputCategory}>
    <option disabled value='select'>category</option>
    <option value='Electronic'>Electronic</option>
    <option value='Clothing'>Clothing</option>
    <option value='Accessories'>Accessories</option>
    </select>

    <input
    onChange={handleInputPrice}
    className='create-page-input'
    placeholder='price '
    type='number'
    />

     <input
    onChange={handleInputImageUrl}
    className='create-page-input'
    placeholder='image url '
    type='text'
    />

     <textarea 
    onChange={handleInputDescription}
    className='create-page-input'
    placeholder='descripton'
    type='text'
    />

    </form> 

    <button className='create-page-button' onClick={postData}>Submit</button> 

    </div>
    </>
  )
}

export default CreatePage