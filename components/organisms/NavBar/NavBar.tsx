import React from 'react';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { HomeIcon, SearchIcon, LoginIcon, PetsIcon, PaidIcon, DescriptionIcon, MenuOpenIcon } from '../../atoms/icons';
import Menu from '../../organisms/Menu';
import MenuItem from '../../atoms/MenuItem';

export default function NavBar(): JSX.Element {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        // <Box sx={{ flexGrow: 1, mb: 4, }}>
        <Container maxWidth='md'>
            <Toolbar disableGutters sx={{ flexGrow: 1, mb: 4, }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Thebullyword
                </Typography>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="Home"
                    sx={{ mr: 2 }}
                >
                    <HomeIcon />
                </IconButton>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="Search"
                    sx={{ mr: 2 }}
                >
                    <SearchIcon />
                </IconButton>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="Menu"
                    ref={anchorRef}
                    id="menu-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                >
                    <MenuOpenIcon />
                </IconButton>
                <Menu
                    menuOptions={{
                        open,
                        anchorRef,
                        handleClose,
                        handleListKeyDown,
                        placement: "bottom-end",
                        id: "home-menu",
                        ariaLabelledby: "menu-button",
                    }}
                    sx={{ width: 160 }}
                >
                    <MenuItem handleClick={handleClose} Icon={LoginIcon} text="Sign In" />
                    <MenuItem handleClick={handleClose} Icon={PetsIcon} text="Breeders List" />
                    <MenuItem handleClick={handleClose} Icon={PaidIcon} text="Membership" />
                    <MenuItem handleClick={handleClose} Icon={DescriptionIcon} text="Faqs" />
                </Menu>
            </Toolbar>
        </Container>
        // </Box>
    );
}