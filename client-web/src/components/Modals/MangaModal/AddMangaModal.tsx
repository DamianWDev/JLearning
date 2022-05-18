import { Grid, Paper, styled, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { InputImg } from '../../_Common/InputImg';
import { SaveButton } from '../../_Common/SaveButton';

const ModalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "550px",
    bgcolor: '#141414',
    borderRadius: "5px",
    boxShadow: "0px 0px 15px 5px #000",
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};

const TextFieldStyled = styled(TextField)(({ theme }) => ({
    marginTop: '15px',
    width: "100%",
    FieldSet: {
        borderColor: `${theme.palette.primary.main} !important`,
    },
    Label: {
        color: "white !important"
    },
    input: {
        color: '#afafaf',
        backgroundColor: "#151515",
    }
}));


interface modalProps {
    handleClose: () => void;
}

export function AddMangaModal({ handleClose }: modalProps) {
    const [img, setImg] = useState("");
    const [mangaName, setmangaName] = useState("");

    //todo: form + validation, waiting for endpoint
    function CreateManga() {
        var formData = new FormData();
        formData.append("file", img)
        formData.append("name", mangaName)
        // axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        // axios.defaults.baseURL = 'http://172.20.0.3:5000';
        // console.log(formData.getAll("file"), formData.getAll("name"));
        // axios({
        //     method: 'POST',
        //     url: '/manga',
        //     data: formData,
        //     withCredentials: false
        // })
        console.log('Created Manga!',
         formData.getAll('file'),
         formData.getAll('name'),
         )
        handleClose();
    }

    return <Paper sx={ModalStyle}>
        <Grid container spacing={2}>
            <Grid item xs={6}
                container direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <InputImg
                    height={400}
                    width={250}
                    img={img}
                    setImg={setImg}
                />
            </Grid>
            <Grid item xs={6}
                container direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography
                    variant="h4"
                    color="white"
                >
                    New Manga
                </Typography>
                <TextFieldStyled
                    onChange={(e) => { setmangaName(e.target.value) }}
                    size="small"
                    focused
                />
            </Grid>
            <Grid item xs={12}
                container direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <SaveButton
                    handleOnClick={CreateManga}
                />
            </Grid>
        </Grid>
    </Paper >
}