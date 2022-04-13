import { CardTileImage } from "./CardTileImage";
import { CardTileTitle } from "./CardTileTitle";
import { CardTileUnderline } from "./CardTileUnderline";


interface CardTileProps {
    image: string;
    title: string;
}

export function CardTile({ image, title }: CardTileProps) {
    return <div style={{ width: "150px" }}>
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