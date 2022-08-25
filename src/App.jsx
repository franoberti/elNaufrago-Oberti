import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"Bienvenido a la Librería El Náufrago"}/>
      <Footer/>
      
    </div>    
  );
}

export default App;