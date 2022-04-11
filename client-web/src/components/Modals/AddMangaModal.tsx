import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FloatingFab } from '../FloatingAddButton/FloatingFab';
import { Grid, Input, makeStyles, Paper, styled, TextField } from '@mui/material';
import { height } from '@mui/system';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#1D1D1D',
    border: '1px solid #fff',
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
};

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1D1D1D',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
}));

const ItemH = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1D1D1D',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
    height: '190px',
}));

export function AddMangaModal() {

    return <Box sx={style}>
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
                // marginTop: "10%"
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography
                            color="primary"
                            variant="h5"
                            textAlign="center"
                        >INFORMATION</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            color="primary"
                            id="outlined-basic"
                            label="CHARACTER"
                            variant="outlined"
                            size="small"
                            fullWidth
                            focused
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            color="primary"
                            id="outlined-basic"
                            label="STROKES"
                            variant="outlined"
                            size="small"
                            fullWidth
                            focused
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            color="primary"
                            id="outlined-basic"
                            label="LEVEL"
                            variant="outlined"
                            size="small"
                            fullWidth
                            focused
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            color="primary"
                            variant="h5"
                            textAlign="center"
                            marginTop="30px"
                        >READINGS</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            color="primary"
                            id="outlined-basic"
                            label="KUN-YOMI"
                            variant="outlined"
                            size="small"
                            fullWidth
                            focused
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            color="primary"
                            id="outlined-basic"
                            label="ON-YOMI"
                            variant="outlined"
                            size="small"
                            fullWidth
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
                            color="primary"
                            variant="h5"
                            textAlign="center"
                        >IMAGE</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box style={{
                            borderRadius: "5px",
                            height: '228px',
                            width: '228px',
                            border: '1px solid #fff',
                        }}>
                            <img src="https://w7.pngwing.com/pngs/754/356/png-transparent-stroke-order-chinese-characters-japanese-fire-japanese-leaf-monochrome-silhouette.png" alt="manga" style={{ width: "100%", borderRadius: "5px", height: "228px" }} />
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </div>
        <div style={{
            width: "100%",
            marginTop: "10px",
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>xs=12</Item>
                </Grid>
            </Grid>
        </div>
    </Box>
}