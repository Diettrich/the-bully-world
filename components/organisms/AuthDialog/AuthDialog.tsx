import React from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Dialog from '../../molecules/Dialog';
import LoginForm from '../../molecules/LoginForm';
import { LoginIcon, PersonAddIcon } from '../../atoms/icons';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { closeLoginDialog } from '../../../app/appSlice';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


const StyledTab = styled((props: any) => <Tab {...props} />)(
    {
        height: 48,
        minHeight: 48,
        padding: 0,
        justifyContent: 'start',
        '&.Mui-selected': {
            color: '#589FF8',
            fontWeight: 500,
        },
    });


const StyledTabs = styled((props: any) => <Tabs {...props} />)(
    {
        '& .MuiTabs-indicator': {
            backgroundColor: '#589FF8',
        },
    });


function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`AuthDialog-${index}`}
            aria-labelledby={`AuthDialog-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `AuthDialog-${index}`,
        'aria-controls': `AuthDialog-${index}`,
    };
}

const iconStyle = (id: number, value: number) => ({
    fill: id === value ? '#589FF8' : '#737373'
});

function AuthDialog(): JSX.Element {

    const open = useAppSelector((state) => state.app.loginDialog.open);
    const dispatch = useAppDispatch();

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Dialog open={open} handleClose={() => dispatch(closeLoginDialog())}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <StyledTabs sx={{ borderColor: '#589FF8' }} value={value} onChange={handleChange} aria-label="Auth Tab" variant="fullWidth">
                    <StyledTab label="Login" icon={<LoginIcon style={iconStyle(0, value)} />} iconPosition="start" {...a11yProps(0)} />
                    <StyledTab label="Register" icon={<PersonAddIcon style={iconStyle(1, value)} />} iconPosition="start" {...a11yProps(1)} />
                </StyledTabs>
            </Box>
            <TabPanel value={value} index={0}>
                <LoginForm />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolore aperiam distinctio, modi ex quis quam quaerat nemo adipisci asperiores alias debitis. Molestias voluptas quasi odit, eveniet doloribus sint possimus?
            </TabPanel>
        </Dialog>
    );
}

export default AuthDialog;
