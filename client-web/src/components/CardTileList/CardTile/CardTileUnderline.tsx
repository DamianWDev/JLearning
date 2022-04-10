import { styled } from "@mui/system"

const CardTileUnderlineStyled = styled('div')(({ theme }) => ({
    backgroundColor: "#F3782C",
    height: "3px",
    borderRadius: "50px",
    width: "100%",
}));

export function CardTileUnderline() {
    return <CardTileUnderlineStyled />
}