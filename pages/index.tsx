import * as React from 'react';
import type { NextPage } from 'next';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Link from '../src/Link';
// import ProTip from '../src/ProTip';
// import Copyright from '../src/Copyright';
import Layout from '../components/templates/Layout';
import AuthDialog from '../components/organisms/AuthDialog';


const Home: NextPage = () => {

    return (
        <React.Fragment>
            <Layout />
            <AuthDialog />
        </React.Fragment>
    );
}

export default Home;
