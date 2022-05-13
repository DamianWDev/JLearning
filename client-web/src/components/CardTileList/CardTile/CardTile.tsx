import { CardTileImage } from "./CardTileImage";
import { CardTileTitle } from "./CardTileTitle";
import { CardTileUnderline } from "./CardTileUnderline";


interface CardTileProps {
    image: string;
    title: string;
}

export function CardTile({ image, title }: CardTileProps) {
    return <div style={{ width: "150px", display: "inline-block", flex:"0 1 auto", alignSelf:"left"}}>
        <CardTileImage
            imageUrl={image}
            title={title}
        />
        <CardTileTitle
            title={title}
        />
        <CardTileUnderline />
    </div>
}