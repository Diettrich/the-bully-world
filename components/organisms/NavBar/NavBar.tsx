import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { HomeIcon, SearchIcon } from '../../atoms/icons';


export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1, mb: 4 }}>
            <Container fixed>
                <Toolbar disableGutters>
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
                    >
                        <SearchIcon />
                    </IconButton>
                </Toolbar>
            </Container>
        </Box>
    );
}