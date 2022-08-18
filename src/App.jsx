import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"Bienvenido a la Librería El Náufrago"}/>
      
      
    </div>    
  );
}

export default App;