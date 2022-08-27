import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  
  return (
    <div className="App">


      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenido a la Librería El Náufrago"}/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>    
  );
}

export default App;