import { Label } from "@material-ui/icons";
import { Button, Fab } from "@mui/material";
import { Box, styled, width } from "@mui/system";
import { Fragment, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


export function UploadImage() {

    const [img, setImg] = useState("");
    const [isVisible, setIsVisible] = useState(true);

    const onChange = (e: any) => {

        setImg(URL.createObjectURL(e.target.files[0]));
        setIsVisible(false);
        console.log(e.target.files[0]);
    };

    const StyledDiv = styled('div')(({ theme }) => ({
        border: "2px solid #fff",
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

        <StyledDiv>
            <input
                id="icon-button-file"
                accept="image/*"
                type="file"
                onChange={onChange}
                hidden
            />

            {isVisible && (
                <AddButton htmlFor="icon-button-file">
                    <AddIcon fontSize={"large"} />
                </AddButton>)
            }

            {!isVisible && (
                <StyledImg
                    src={img}
                    height="230px"
                    width="230px" />)
            }
        </StyledDiv >

    );
}
