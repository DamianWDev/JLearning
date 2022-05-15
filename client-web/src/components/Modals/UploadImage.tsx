import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { CloudUpload } from "@material-ui/icons";
import { makeStyles, styled } from "@material-ui/styles";

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

const ImageStyled = styled("img")(({ theme }) => ({
    borderRadius: "10px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

interface UploadImageProps {
    height?: number,
    width?: number,
}

export function UploadImage({ height = 230, width = 230 }: UploadImageProps) {
    const { button } = useStyle();
    
    const [img, setImg] = useState("");
    const onDrop = useCallback(async acceptedFiles => {
        setImg(URL.createObjectURL(acceptedFiles[0]));
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div style={{
            width: `${width}px`,
            height: `${height}px`,
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5%",
                border: `2px dashed #F3782C`,
                width: `${width}px`,
                height: `${height}px`,
                position: "absolute",
                backgroundColor: "#212121"
            }} {...getRootProps()} >
                <input {...getInputProps()} />
                {
                    <button
                        className={button}>
                        <CloudUpload />
                    </button>
                }
                {img && (<ImageStyled
                    src={img}
                    height={height - 10}
                    width={width - 10}
                    onClick={() => {
                        setImg("")
                    }}
                />)}
            </div>
        </div >
    )
}