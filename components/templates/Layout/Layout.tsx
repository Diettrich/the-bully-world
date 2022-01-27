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
            <Container maxWidth='md'>
                <Grid container>
                    <Grid item md={8} sm={12}>
                        <Box>
                            <StoriesContainer />
                            <PostContainer />
                        </Box>
                    </Grid>
                    <Grid item md={4}
                        sx={{
                            display: { md: 'block', sm: 'none' },
                            pl: 4,
                        }}>
                        <SideMenu />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment >
    );
}


export default Layout;