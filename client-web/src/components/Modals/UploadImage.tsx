import { Button, Fab, styled } from "@mui/material";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { CloudUpload } from "@material-ui/icons";
import { positions } from "@mui/system";
import CSS from 'csstype';
import { makeStyles } from "@material-ui/styles";



export function UploadImage() {
    const [img, setImg] = useState("");

    const onDrop = useCallback(acceptedFiles => {
        setImg(URL.createObjectURL(acceptedFiles[0]));
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const handleClick = () => {
        console.log("clicked");
    }

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

    const { button } = useStyle();

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5%",
            border: `2px dashed #F3782C`,
            height: "230px",
            width: "230px",
            position: "absolute",
            backgroundColor: "#212121",
        }} {...getRootProps()} >
            <input {...getInputProps()} />
            {
                <button
                    className={button}
                    onClick={handleClick}>
                    <CloudUpload />
                </button>
            }
            {img && (<img
                onClick={() =>
                    setImg("")
                }
                src={img}
                height="220px;"
                width="220px"
                style={{
                    borderRadius: "10px",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            />)}
        </div >
    )
}