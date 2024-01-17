
import './App.css'
import React from 'react';
import { Route,Routes } from "react-router-dom";
import Headerr from './Components/Headerr';
import Home from './Pages/Home';
import AllProduct from './Components/AllProduct';
import CategoryPage from './Pages/CategoryPage';
import ProductPage from './Pages/ProductPage';
import Products from './Pages/Products';
import Footer from './Components/Footer'
import ContactUs from './Components/ContactUs';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <>
<Headerr/>
   <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/AllProduct" element={<AllProduct/>} />
         <Route path="/ContactUs" element={<ContactUs/>} />
         <Route path="/product/:category" element={<Products />}/>
         <Route path="/products/category/:categoryName" element={<CategoryPage />} />
         <Route path="/products/:id" element={<Products/>} />
         <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>   
    </>
    
  )
}

export default App
