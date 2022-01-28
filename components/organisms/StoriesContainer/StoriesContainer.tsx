import { Box, IconButton } from "@mui/material";
import styled from '@emotion/styled';
import StoryItem from "../../molecules/StoryItem";
import { NavigateBeforeIcon, NavigateNextIcon } from "../../atoms/icons";

import imgSrc from "../../../public/dev-image/exclusive.jpg";

const StyledBox = styled(Box)`
    display: flex;
    overflow-y: hidden;
    gap: 10px;
    
    &::-webkit-scrollbar {
        display: none;
    }
`;

const story = {
    userName: "Exclusivekennels",
    imgSrc: imgSrc,
}

function StoriesContainer(): JSX.Element {
    return (
        <Box sx={{ width: "100%", mb: 8, }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton>
                    <NavigateBeforeIcon style={{ fill: '#737373' }} />
                </IconButton>
                <IconButton>
                    <NavigateNextIcon style={{ fill: '#737373' }} />
                </IconButton>
            </Box>
            <StyledBox>
                <StoryItem {...story} />
                <StoryItem {...story} />
                <StoryItem {...story} />
                <StoryItem {...story} />
                <StoryItem {...story} />
                <StoryItem {...story} />
                <StoryItem {...story} />
                <StoryItem {...story} />
                <StoryItem {...story} />
                <StoryItem {...story} />
                <StoryItem {...story} />
            </StyledBox>
        </Box >
    );
}

export default StoriesContainer;
