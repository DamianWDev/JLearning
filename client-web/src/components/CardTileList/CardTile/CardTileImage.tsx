import { styled } from "@mui/system";

interface ImgaeCardImageProp {
    imageUrl: string;
    title: string;
}

const CardTileImageStyled = styled('img')(({ theme }) => ({
    width: '100%',
    height: '250px',
    borderRadius: '10px',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    transition: '0.3s',
    '&:hover': {
        boxShadow: '0px 0px 10px 0px rgba(243, 120, 44,0.75)',
    },
}));

export function CardTileImage({ imageUrl, title }: ImgaeCardImageProp) {
    return <CardTileImageStyled
        src={imageUrl}
        alt={title} />
}