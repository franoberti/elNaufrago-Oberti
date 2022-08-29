import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Rutas from './routes/Rutas'

function App() {
  
  return (
    <div className="App">
      <Rutas></Rutas>
    </div>    
  );
}

export default App;