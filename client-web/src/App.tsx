import './App.css';
import { CardTileGrid } from './components/CardTileList/CardTileGrid';
import Navbar from './components/Navbar/Navbar';
import { FloatingFab } from './components/FloatingAddButton/FloatingFab';
import { createTheme, ThemeProvider } from '@mui/material';


declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      primary: {
        main: string;
      }
    },
    input: {
      color: string
    }
  }
}


const theme = createTheme({
  palette: {
    primary: {
      main: "#F3782C"
    }
  }
});

function App() {


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <CardTileGrid />
        <FloatingFab />
      </div >
    </ThemeProvider>
  );
}


export default App;