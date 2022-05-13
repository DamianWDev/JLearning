import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { CardTile } from "./CardTile/CardTile";
import { Card } from "./CardTileGrid";

interface CardTileListProps {
    cards: Card[],
}

export function CardTileList({ cards }: CardTileListProps) {
    return <Grid container xs={12}
        rowSpacing={3}
        columnSpacing={3}
        justifyContent="center"
        direction="row"
    >

        {cards.map((card, i) => {
            return (
                <Grid
                    item>
                    <CardTile
                        key={i} {...card} />
                </Grid>
            )
        })}
    </Grid>
}