import { Grid } from "@mui/material"
import { useEffect, useState } from "react";
import { CardTileList } from "./CardTileList";



export interface Card {
    image: string;
    title: string;
}

export interface CardTileGridProps {
    cardsToDisplay: Card[];
}

export function CardTileGrid({cardsToDisplay} : CardTileGridProps) {
    const [cards, setCards] = useState<Card[]>(cardsToDisplay);
    
    useEffect(() => {
        fetchMangas();
    }, [cardsToDisplay]);

    const fetchMangas = async () => {
        // const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1'); //!tu będzie pajton
        // const { data } = generatePlacholder();
        setCards(cardsToDisplay)
    }

    return <div style={{
        margin: "2em",
    }}>
        <CardTileList cards={cards} />
    </div>
}

