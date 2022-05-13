import { styled } from "@mui/system";
import { useState } from "react";

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
    const [hovered, setHovered] = useState(false);


    return <div
        style={{
            overflow: 'hidden',
            height: '250px',
            borderRadius: '11px',
            width: '100%',
            marginBottom: '5px',
        }}
        onMouseOver={() => { setHovered(true) }}
        onMouseOut={() => { setHovered(false) }}
    >
        <CardTileImageStyled
            src={imageUrl}
            alt={title}
            style={{
                transform: `${hovered ? 'scale(1.1,1.1)' : 'scale(1,1)'}`,
                cursor: `${hovered ? 'pointer' : 'default'}`,
            }}
        />
    </div>
}