import { styled } from "@mui/system";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { useDropzone } from "react-dropzone";

export function UploadImage() {
    const [img, setImg] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: acceptedFiles => {
            const file = acceptedFiles[0];
            const reader = new FileReader();
            console.log("halo");
            setImg(URL.createObjectURL(file));
            setIsVisible(false);
        }
    });

    const onChange = function (e: any) {
        setImg(URL.createObjectURL(e.target.files[0]));
        setIsVisible(false);
        console.log(e.target.files[0]);
    };

    const StyledDiv = styled('div')(({ theme }) => ({
        border: "2px solid red",
        borderRadius: "5px",
        height: "230px",
        width: "230px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }));

    const StyledImg = styled('img')(({ theme }) => ({
        borderRadius: "5px",
        "&:hover": {
            opacity: 0.5,
        },
    }));

    const AddButton = styled('label')(({ theme }) => ({
        padding: "15px",
        display: "flex",
        borderRadius: "50%",
        backgroundColor: theme.palette.primary.main,
        cursor: "pointer",
    }));

    return (
        <div>
            <StyledDiv {...getRootProps()} >
                <input
                    id="icon-button-file"
                    accept="image/*"
                    onClick={onChange}
                    type="file"
                    {...getInputProps()}
                />

                {isVisible && (
                    <AddButton
                        htmlFor="icon-button-file">
                        <AddIcon fontSize={"large"} />
                    </AddButton>)}

                {!isVisible && (
                    <StyledImg
                        src={img}
                        height="230px"
                        width="230px" />)}
            </StyledDiv >
        </div>

    );
}
