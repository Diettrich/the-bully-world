import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import Image from "next/image";

// const StyledBox = styled(Box)`
//     width: 110px;
//     height: 172px;
//     border: 1px red solid;
//     margin-right: 10px;

//     &::-webkit-scrollbar {
//         display: none;
//     }
// `;

type StoryProps = {
    userName: string,
    imgSrc: any,
}

const StyledImage = styled(Image)`
    border-radius: 10px;
`;

function StoryItem({ userName, imgSrc }: StoryProps): JSX.Element {
    return (
        <Box sx={{ cursor: 'pointer' }}>
            <Box sx={{ width: 110, height: 172, position: 'relative' }}>
                <StyledImage
                    src={imgSrc}
                    alt="story photo"
                    width={110}
                    height={172}
                    layout="responsive"
                    objectFit="cover"
                    quality={100}
                />
            </Box>
            <Typography sx={{ color: '#444B51', fontWeight: 500, fontSize: 14, mt: 1 }}>{userName}</Typography>
        </Box>
    );
}

export default StoryItem;
