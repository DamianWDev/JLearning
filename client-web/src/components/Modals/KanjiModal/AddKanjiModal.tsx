import { Grid, Paper, styled } from '@mui/material';
import { KanjiTranslationsTable } from './Components/KanjiTranslationsTable';
import { useState } from 'react';
import { KanjiInfo } from './Components/KanjiInfo';
import { KanjiReadings } from './Components/KanjiReadings';
import { KanjiGraphic } from './Components/KanjiGraphic';
import { SaveButton } from '../../_Common/SaveButton';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#141414',
    borderRadius: "5px",
    boxShadow: "0px 0px 15px 5px #000",
    p: 4,
    display: 'flex',
    flexDirection: 'column',
};

const WrapperStyled = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    padding: "10px",
}));

interface modalProps {
    handleClose: () => void;
}

function CreateKanji(){
    console.log("kanji created!")
}

export function AddKanjiModal({ handleClose }: modalProps) {

    const [kanjiGraphic, setKanjiGraphic] = useState("");

    return <Paper sx={style}>
        <WrapperStyled>
            <div style={{ width: "60%" }}>
                <Grid container spacing={2}>
                    <KanjiInfo />
                    <KanjiReadings />
                </Grid>
            </div>
            <KanjiGraphic
                kanjiGraphic={kanjiGraphic}
                setKanjiGraphic={setKanjiGraphic}
            />
        </WrapperStyled>
        <Grid container spacing={2}>
            <Grid item xs={12} marginTop="20px">
                <KanjiTranslationsTable />
            </Grid>
            <Grid item xs={12}>
                <SaveButton 
                    handleOnClick={CreateKanji}
                />
            </Grid>
        </Grid>
    </Paper>
}