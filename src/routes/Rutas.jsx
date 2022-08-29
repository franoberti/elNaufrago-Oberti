import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Footer from '../components/Footer/Footer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Home from '../components/Home/Home';
import Cart from '../components/Cart/Cart';
import AboutUs from '../components/AboutUs/AboutUs';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const Rutas = () => {
  return (
    <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/catalogo" element={<ItemListContainer greeting={"Nuestro Catálogo"}/>} />
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path='/carrito' element={<Cart/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default Rutas
