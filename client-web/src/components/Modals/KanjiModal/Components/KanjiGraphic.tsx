import { Grid, Typography } from "@mui/material";
import { InputImg } from "../../../_Common/InputImg";

interface KanjiInfoProps {
    kanjiGraphic: string;
    setKanjiGraphic: (kanjiGraphic: string) => void;
}

export function KanjiGraphic({ kanjiGraphic, setKanjiGraphic }: KanjiInfoProps) {
    return <div style={{ width: "38%" }}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography
                    color="#fff"
                    variant="h5"
                    textAlign="center"
                >IMAGE</Typography>
            </Grid>
            <Grid item xs={12}>
                <InputImg
                    img={kanjiGraphic}
                    setImg={setKanjiGraphic}
                />
            </Grid>
        </Grid>
    </div>
}