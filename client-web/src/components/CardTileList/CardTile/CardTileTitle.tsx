import { styled } from "@mui/system";

interface CardTileProps {
    title: string;
}

const CardTileTitleStyled = styled('h4')(({ theme }) => ({
    color: "#FFF",
    margin: "0 0 5px 0",
}));

export function CardTileTitle({ title }: CardTileProps) {
    return <CardTileTitleStyled>{title}</CardTileTitleStyled>;
}