import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { CardTile } from "./CardTile/CardTile";
import { Card } from "./CardTileGrid";

interface CardTileListProps {
    cards: Card[],
}

export function CardTileList({ cards }: CardTileListProps) {
    return <Grid container
        rowSpacing={2}
        columnSpacing={3}
        alignContent={"center"}>
        {cards.map((card, i) => {
            return (
                <Grid item>
                    <CardTile key={i} {...card} />
                </Grid>
            )
        })}
    </Grid>
}