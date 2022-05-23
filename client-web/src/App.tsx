import './App.css';
import { Card, CardTileGrid } from './components/CardTileList/CardTileGrid';
import Navbar from './components/Navbar/Navbar';
import { FloatingFab } from './components/FloatingAddButton/FloatingFab';
import { createTheme, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      primary: {
        main: string;
        light: string;
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
      light: "#FFF",
      main: "#F3782C",
      dark: "#000",
    }
  }
});



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/NARUTO" element={<CardTileGrid cardsToDisplay={generatePlacholder2()} />} />
          <Route path="/" element={<CardTileGrid cardsToDisplay={generatePlacholder()} />} />
        </Routes>
        <FloatingFab />
      </div >
    </ThemeProvider>
  );
}

function generatePlacholder(): Card[] {
  let cards: Card[] = [
    { image: "https://www.dystryktzero.pl/images/detailed/116/99e50667bcf522585c68735ccd6c1128.jpg", title: "NARUTO" },
    { image: "https://static.wikia.nocookie.net/onepiece/images/6/64/Volume_17.png", title: "ONE PIECE" },
    { image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/8/83/Kimetsu_no_Yaiba_V1.png", title: "KIMETSU" },
    { image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/3/31/Volume_4.png", title: "JUJUTSU" },
    { image: "https://static.wikia.nocookie.net/hunterxhunter/images/4/45/Volume0cover.jpg", title: "HUNTER X HUNTER" },
    { image: "https://source.unsplash.com/random", title: "Random Image" },
    { image: "https://www.dystryktzero.pl/images/detailed/116/99e50667bcf522585c68735ccd6c1128.jpg", title: "NARUTO" },
    { image: "https://static.wikia.nocookie.net/onepiece/images/6/64/Volume_17.png", title: "ONE PIECE" },
    { image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/8/83/Kimetsu_no_Yaiba_V1.png", title: "KIMETSU" },
    { image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/3/31/Volume_4.png", title: "JUJUTSU" },
    { image: "https://static.wikia.nocookie.net/hunterxhunter/images/4/45/Volume0cover.jpg", title: "HUNTER X HUNTER" },
    { image: "https://source.unsplash.com/random", title: "Random Image" },
    { image: "https://www.dystryktzero.pl/images/detailed/116/99e50667bcf522585c68735ccd6c1128.jpg", title: "NARUTO" },
    { image: "https://static.wikia.nocookie.net/onepiece/images/6/64/Volume_17.png", title: "ONE PIECE" },
    { image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/8/83/Kimetsu_no_Yaiba_V1.png", title: "KIMETSU" },
    { image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/3/31/Volume_4.png", title: "JUJUTSU" },
    { image: "https://static.wikia.nocookie.net/hunterxhunter/images/4/45/Volume0cover.jpg", title: "HUNTER X HUNTER" },
    { image: "https://source.unsplash.com/random", title: "Random Image" },
  ];
  return cards;
}

function generatePlacholder2(): Card[] {
  let cards: Card[] = [
    { image: "https://www.dystryktzero.pl/images/detailed/116/99e50667bcf522585c68735ccd6c1128.jpg", title: "VOLUME 1" },
    { image: "https://static.wikia.nocookie.net/onepiece/images/6/64/Volume_17.png", title: "VOLUME 2" },
    { image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/8/83/Kimetsu_no_Yaiba_V1.png", title: "VOLUME 3" },
    { image: "https://source.unsplash.com/random", title: "VOLUME 4" },
  ];
  return cards;
}


export default App;