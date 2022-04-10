import './App.css';
import { CardTileGrid } from './components/CardTileList/CardTileGrid';
import Navbar from './components/Navbar/Navbar';
import { FloatingFab } from './components/FloatingAddButton/FloatingFab';


function App() {

  return (
    <div className="App">
        <Navbar />
        <CardTileGrid />
        <FloatingFab />
    </div >
  );
}

export default App;