import { Box, IconButton } from "@mui/material";
import styled from '@emotion/styled';
import StoryItem from "../../molecules/StoryItem";
import { NavigateBeforeIcon, NavigateNextIcon } from "../../atoms/icons";

const StyledBox = styled(Box)`
    display: flex;
    overflow-y: hidden;
    
    &::-webkit-scrollbar {
        display: none;
    }
`;

function StoriesContainer(): JSX.Element {
    return (
        // TODO: Add stories here
        <Box sx={{ border: '1px red solid', width: "100%", mb: 8, }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton>
                    <NavigateBeforeIcon style={{ fill: '#737373' }} />
                </IconButton>
                <IconButton>
                    <NavigateNextIcon style={{ fill: '#737373' }} />
                </IconButton>
            </Box>
            <StyledBox>
                <StoryItem />
                <StoryItem />
                <StoryItem />
                <StoryItem />
                <StoryItem />
                <StoryItem />
            </StyledBox>
        </Box>
    );
}

export default StoriesContainer;
