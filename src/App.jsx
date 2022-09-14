import './App.css';
import Rutas from './routes/Rutas'
import GlobalProvider from './context/GlobalProvider';

function App() {
  
  return (
    <div className="App">
      <GlobalProvider>
        <Rutas/>
      </GlobalProvider>
    </div>    
  );
}

export default App;