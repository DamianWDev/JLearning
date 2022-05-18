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


export function KanjiInfo() {

    return <>
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
    </>
}