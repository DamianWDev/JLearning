import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { CloudUpload } from "@material-ui/icons";
import { makeStyles, styled } from "@material-ui/styles";

const ImageStyled = styled("img")(({ theme }) => ({
    borderRadius: "10px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));


interface DisplayImgProps {
    img?: string,
    setImg: (imgUrl: any) => void,
    height?: number,
    width?: number,
}

export function DisplayImg({ height = 230, width = 230, setImg, img }: DisplayImgProps) {

    return (<>
        {img && (<ImageStyled
            src={img}
            height={height - 10}
            width={width - 10}
            onClick={() => {
                setImg("")
            }}
        />)}
    </>
    )
}