import React from 'react';
import { InputBase } from '@mui/material';

function Input() {
    return (
        <InputBase sx={{
            width: '100%', height: 40, borderRadius: 2, border: '1px solid #e6e6e6', bgcolor: '#F5F6FA', pl: 2, pr: 2, mb: 2
        }} />
    );
}

export default Input;
