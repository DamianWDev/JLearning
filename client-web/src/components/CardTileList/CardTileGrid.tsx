import { Grid } from "@mui/material"
import { useEffect, useState } from "react";
import { CardTileList } from "./CardTileList";



export interface Card {
    image: string;
    title: string;
}

export function CardTileGrid() {
    const [cards, setCards] = useState<Card[]>([]);
    useEffect(() => {
        fetchMangas();
    }, []);

    const fetchMangas = async () => {
        // const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1'); //!tu będzie pajton
        const { data } = generatePlacholder();
        setCards(data)
    }

    return <div style={{
        margin: "2em",
    }}>
        <CardTileList cards={cards} />
    </div>
}

function generatePlacholder() {
    return {
        data: [
            { image: "https://www.dystryktzero.pl/images/detailed/116/99e50667bcf522585c68735ccd6c1128.jpg", title: "NARUTO" },
            { image: "https://static.wikia.nocookie.net/onepiece/images/6/64/Volume_17.png", title: "ONE PIECE" },
            { image: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/8/83/Kimetsu_no_Yaiba_V1.png", title: "KIMETSU" },
            { image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/3/31/Volume_4.png", title: "JUJUTSU" },
            { image: "https://static.wikia.nocookie.net/hunterxhunter/images/4/45/Volume0cover.jpg", title: "HUNTER X HUNTER" },
            { image: "https://source.unsplash.com/random", title: "Random Image" },
            { image: "https://source.unsplash.com/random", title: "Random Image" },
            { image: "https://source.unsplash.com/random", title: "Random Image" },
            { image: "https://source.unsplash.com/random", title: "Random Image" },
            { image: "https://source.unsplash.com/random", title: "Random Image" },
            { image: "https://source.unsplash.com/random", title: "Random Image" },
            { image: "https://source.unsplash.com/random", title: "Random Image" },
            { image: "https://source.unsplash.com/random", title: "Random Image" },
            { image: "https://source.unsplash.com/random", title: "Random Image" },
            { image: "https://source.unsplash.com/random", title: "Random Image" },
            { image: "https://source.unsplash.com/random", title: "Random Image" },
        ]
    }
}
