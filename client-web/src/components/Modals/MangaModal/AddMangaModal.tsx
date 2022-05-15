import { Button, Grid, Input, Paper, styled, TextField, Typography } from '@mui/material';
import { height } from '@mui/system';
import * as React from 'react';
import { UploadImage } from '../UploadImage';

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

const ConfirmButtonStyled = styled(Button)(({ theme }) => ({
    marginTop: '15px',
    color: "white",
    fontWeight: "bold",
    width: "100%",
}));

export function AddMangaModal() {

    return <Paper sx={ModalStyle}>
        <Grid container spacing={2}>
            <Grid item xs={6}
                container direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <UploadImage
                    height={400}
                    width={250}
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
                    size="small"
                    focused
                />
            </Grid>
            <Grid item xs={12}
                container direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <ConfirmButtonStyled
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    SAVE
                </ConfirmButtonStyled>
            </Grid>
        </Grid>
    </Paper >
}