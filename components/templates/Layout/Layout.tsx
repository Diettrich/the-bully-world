import * as React from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import NavBar from '../../organisms/NavBar';
import StoriesContainer from '../../organisms/StoriesContainer';
import SideMenu from '../../organisms/SideMenu';
import PostContainer from '../../organisms/PostContainer';

function Layout() {
    return (
        <React.Fragment>
            <NavBar />
            <Container fixed>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={8}>
                        <Grid item xs={8}>
                            <Box>
                                <StoriesContainer />
                                <PostContainer />
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <SideMenu />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment >
    );
}


export default Layout;