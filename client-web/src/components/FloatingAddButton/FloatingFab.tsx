import { Fab } from '@mui/material';
import AddIcon from '@material-ui/icons/Add';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';  
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AddMangaModal } from '../Modals/MangaModal/AddMangaModal';

const floatingStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export function FloatingFab() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Fab
                onClick={handleOpen}
                color={"primary"}
                sx={floatingStyle}>
                <AddIcon />
            </Fab>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <AddMangaModal />
            </Modal>
        </div>
    );
}