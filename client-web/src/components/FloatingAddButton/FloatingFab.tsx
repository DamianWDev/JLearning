import { Fab } from '@mui/material';
import AddIcon from '@material-ui/icons/Add';
import * as React from 'react';
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
                <AddMangaModal 
                    handleClose={handleClose}
                />
            </Modal>
        </div>
    );
}