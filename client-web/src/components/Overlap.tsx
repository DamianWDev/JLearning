import React, { useState } from "react";



interface Overlap {
    base: React.ReactNode;
    overlay: React.ReactNode;
}

export function Overlap({ base, overlay }: Overlap) {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };


    //return two overlapped divs
    return (
        <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
            }}
        >
            {base}
            <div
                style={{
                    position: "absolute",
                }}>
            </div>
            {isHovering && (
                <div
                    style={{
                        position: "absolute",
                    }}>
                    {overlay}
                </div>)}
        </div>
    )
};