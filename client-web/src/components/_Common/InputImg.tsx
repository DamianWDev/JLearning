import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { CloudUpload } from "@material-ui/icons";
import { makeStyles, styled } from "@material-ui/styles";
import { DisplayImg } from "./DisplayImg";

const useStyle = makeStyles(theme => ({
    button: {
        backgroundColor: '#fff',
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        border: "none",
        outline: "none",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        "&:hover": {
            backgroundColor: "#F3782C",
        }
    }
}))


interface InputImgProps {
    img?: string,
    setImg: (imgUrl: any) => void,
    height?: number,
    width?: number,
}

export function InputImg({ height = 230, width = 230, setImg, img }: InputImgProps) {
    const { button } = useStyle();

    const wrapperStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5%",
        border: `2px dashed #F3782C`,
        width: `${width}px`,
        height: `${height}px`,
        position: "absolute",
        backgroundColor: "#212121"
    }


    const [imgDisplay, setimgDisplay] = useState("");

    const onDrop = useCallback(acceptedFiles => {
        setimgDisplay(URL.createObjectURL(acceptedFiles[0]));
        setImg(acceptedFiles[0]);
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div style={{
            width: `${width}px`,
            height: `${height}px`,
        }}>
            <div style={wrapperStyle} {...getRootProps()} >
                <input {...getInputProps()} />
                {<button
                    className={button}>
                    <CloudUpload />
                </button>}
                <DisplayImg
                    img={imgDisplay}
                    setImg={setimgDisplay}
                    height={height}
                    width={width}
                />
            </div>
        </div >
    )
}