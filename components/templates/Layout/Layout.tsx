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
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={8}>
                        <Grid item md={8} xs={12}>
                            <Box>
                                <StoriesContainer />
                                <PostContainer />
                            </Box>
                        </Grid>
                        <Grid item md={4}>
                            <SideMenu />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment >
    );
}


export default Layout;