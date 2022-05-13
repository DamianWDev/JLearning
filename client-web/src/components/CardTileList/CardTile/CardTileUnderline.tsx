import { useTheme } from "@mui/material";
import { styled } from "@mui/system"



const CardTileUnderlineStyled = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "3px",
    borderRadius: "50px",
    width: "100%",
}));

export function CardTileUnderline() {
    return <CardTileUnderlineStyled />
}