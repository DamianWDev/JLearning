import Typography from '@mui/material/Typography';
import { Grid, styled, TextField } from '@mui/material';

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


export function KanjiReadings() {
    return <>
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
    </>
}