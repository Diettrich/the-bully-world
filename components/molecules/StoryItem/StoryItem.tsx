import { Box } from '@mui/material';

// const StyledBox = styled(Box)`
//     width: 110px;
//     height: 172px;
//     border: 1px red solid;
//     margin-right: 10px;

//     &::-webkit-scrollbar {
//         display: none;
//     }
// `;

function StorieItem(): JSX.Element {
    return (
        <Box>
            <Box sx={{ width: 110, height: 172, border: '1px red solid', mr: 1 }}>

            </Box>
        </Box>
    );
}

export default StorieItem;
