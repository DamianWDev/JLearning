import { Fab } from '@mui/material';
import AddIcon from '@material-ui/icons/Add';

interface FloatingFabProps {

}

const floatingStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};


export function FloatingFab(props: FloatingFabProps) {

    return (
        <Fab
            color={"primary"}
            sx={floatingStyle}>
            <AddIcon />
        </Fab>
    );
}