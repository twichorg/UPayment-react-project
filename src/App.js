import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CreatePage from './pages/CreatePage';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext(); // createContext is used to access the data from the DataContext

function App() {

  const [data, setData] = useState([]); // useState is used to access the data from the DataContext

  const getData = async () => { // getData is a function that fetches the data from the server
    try{
      let data = await axios.get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/')  // axios is used to fetch the data from the server
      .then(({data}) => data);
      setData(data);
    }catch(err){
      console.log(err);
    }
  } 
  
  useEffect(() => { // useEffect is used to fetch the data from the server
    getData();
  }, []);

const postDelete = async (id) => {  // id is the id of the product that is being deleted
  try{
    await axios.delete(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`);  // delete the product from the server
  }catch(err){
    console.log(err);
  }
  getData();
}

  return (
    <DataContext.Provider value={data}> 
      <BrowserRouter>               
         <Routes>
          <Route exact path="/" element={<HomePage postDelete = {postDelete} />} />
          <Route path="/productDetail" element={<ProductDetailPage/>}/>          
          <Route path="/create" element={<CreatePage/>}/>                
         </Routes>
        </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
