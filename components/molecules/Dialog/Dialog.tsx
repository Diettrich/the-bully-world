import React from 'react';
import { Modal, Box, Backdrop, Fade, Typography, IconButton } from '@mui/material';
import { CloseIcon } from '../../atoms/icons';

type DialogProps = {
    open: boolean,
    handleClose: (event: Event | React.SyntheticEvent) => void,
    children: React.ReactNode,
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'calc(100% - 32px)',
    maxWidth: '330px',
    overflow: 'hidden',
    '&:focus': {
        outline: 'none',
    }
};

function Dialog({ children, open, handleClose }: DialogProps) {
    return (
        <Modal
            aria-labelledby="transition-modal"
            aria-describedby="transition-modal"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 450,
            }}>
            <Fade in={open}>
                <Box sx={style}>
                    <Box sx={{
                        height: 46,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        bgcolor: '#589FF8',
                        borderTopRightRadius: 8,
                        borderTopLeftRadius: 8,
                    }}>
                        <Typography variant="h4" sx={{
                            fontWeight: 500,
                            fontSize: '1rem',
                            color: '#fff',
                            paddingLeft: 2,
                        }}>
                            Welcome To Thebullyworld
                        </Typography>
                        <IconButton onClick={handleClose} sx={{
                            width: 46,
                            height: 46,
                            borderRadius: 0,
                            borderLeft: '1px solid #ffffff',
                        }}>
                            <CloseIcon style={{ fill: '#ffffff' }} />
                        </IconButton>
                    </Box>
                    <Box sx={{
                        bgcolor: 'background.paper',
                        p: 2,
                        borderBottomRightRadius: 8,
                        borderBottomLeftRadius: 8,
                    }}>
                        {children}
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}

export default Dialog;
