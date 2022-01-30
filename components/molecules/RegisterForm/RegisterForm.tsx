import React from 'react';

import { Typography, Button, Box } from '@mui/material';
import Input from '../../atoms/Input';

const Label = ({ children, ...props }: any) => (
    <Typography sx={{
        color: '#737373',
        fontWeight: 500,
        mb: 1,
    }} >{children}</Typography>
);

const AppButton = ({ children }: any) => (
    <Button sx={{
        color: '#fff',
        bgcolor: '#589FF8',
        width: '100%',
        mt: 2,
        "&:hover": {
            bgcolor: '#4A90E2',
            color: '#fff',
        },
    }}>{children}</Button>
);

function RegisterForm() {
    return (
        <>
            <Label>Kennel Name *</Label>
            <Input />
            <Label>Email Address *</Label>
            <Input />
            <Label>Password *</Label>
            <Input />
            <Box>
                <AppButton>Register</AppButton>
            </Box>
        </>
    );
}

export default RegisterForm;
