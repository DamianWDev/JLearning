import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FloatingFab } from '../FloatingAddButton/FloatingFab';
import { Grid, Input, makeStyles, Paper, styled, TextField } from '@mui/material';
import { height } from '@mui/system';
import { UploadImage } from './UploadImage';
import { BasicTable } from './TranslationTable';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#141414',
    borderRadius: "5px",
    //popup box shadow
    boxShadow: "0px 0px 15px 5px #000",
    p: 4,
    display: 'flex',
    flexDirection: 'column',
};

const TextFieldStyled = styled(TextField)(({ theme }) => ({
    width: "100%",
    FieldSet: {
        borderColor: `${theme.palette.primary.main} !important`,
    },
    Label: {
        color: "white !important"
    },
    input: {
        color: '#afafaf',
        textAlign: "center" as 'center',
        backgroundColor: "#151515",
    }
}));

export function AddMangaModal() {

    return <Paper sx={style}>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: "space-between",
        }}>
            <div style={{
                width: "60%",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h5"
                            textAlign="center"
                            color="#fff"
                        >INFORMATION</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextFieldStyled
                            size="small"
                            label="CHARACTER"
                            focused
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextFieldStyled
                            label="STROKES"
                            size="small"
                            focused
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextFieldStyled
                            label="LEVEL"
                            size="small"
                            focused
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            color="#fff"
                            variant="h5"
                            textAlign="center"
                            marginTop="30px"
                        >READINGS</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldStyled
                            label="KUN-YOMI"
                            size="small"
                            focused
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldStyled
                            label="ON-YOMI"
                            size="small"
                            focused
                        />
                    </Grid>
                </Grid>
            </div>
            <div style={{
                width: "38%",
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography
                            color="#fff"
                            variant="h5"
                            textAlign="center"
                        >IMAGE</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <UploadImage />
                    </Grid>
                </Grid>
            </div>
        </div>
        <div style={{
            width: "100%",
            marginTop: "10px",
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} marginTop="20px">
                    <BasicTable />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            width: "100%",
                        }}
                    >
                        SAVE
                    </Button>
                </Grid>
            </Grid>
        </div>
    </Paper>
}