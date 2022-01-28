import { useState } from "react";
import Image from "next/image";
// import Link from 'next/link';

import { MoreHorizIcon, FavoriteIcon } from "../../atoms/icons";
import { Avatar, Box, Typography, IconButton } from "@mui/material";
import { css } from '@emotion/react';
import { keyframes } from '@mui/system';

type PostProps = {
    userName: string,
    fullName: string,
    avatar: string,
    price: string,
    imgSrc: any,
    timeLeft: string,
    description: string,
    sex: string,
    age: string,
    Clr: string,
    liked: boolean,
}

const spanDescriptionStyle = {
    fontSize: 13, fontWeight: 500, color: "#444B51"
}

const infosDescriptionStyle = {
    fontSize: 13, fontWeight: 400, color: "#737373"
}

const likeAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
}`;


function Post({ userName, fullName, avatar, price, imgSrc, timeLeft, description, sex, age, Clr, liked }: PostProps) {

    const [likedState, setLikedState] = useState(liked);

    const likePost = () => {
        // flip like state
        setLikedState(!likedState);
    }

    return (
        <Box sx={{ mb: 4.5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box sx={{ mr: 1, cursor: 'pointer' }}>
                        <Avatar alt="Remy Sharp" src={avatar} />
                    </Box>
                    <Box sx={{ cursor: 'pointer' }}>
                        <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#444B51" }}>{userName}</Typography>
                        <Typography sx={{ fontSize: 12, color: "#737373" }}>{fullName}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: 500, color: "#444B51" }}>{price}</Typography>
                </Box>
            </Box>
            <Box
                sx={{ borderRadius: '10px', overflow: 'hidden', position: 'relative', pt: '100%', width: '100%', mb: 1.5 }}
                onDoubleClick={likePost}
            >
                <FavoriteIcon
                    onClick={likePost}
                    css={[
                        css`
                        position: absolute;
                        top: 12px;
                        right: 12px;
                        z-index: 500;
                        fill: ${likedState ? '#ed4956' : '#ffffff'};
                        cursor: pointer;
                    `,
                        likedState && css`
                        animation: ${likeAnimation} 0.45s ease-in-out;
                    `
                    ]}
                />
                <Image
                    src={imgSrc}
                    alt="photo"
                    layout="fill"
                    quality={100}
                />
            </Box>
            <Box>
                <Typography sx={{ fontSize: 12, fontWeight: 300, color: "#737373" }}>{timeLeft}</Typography>
                <Typography sx={{ color: "#444B51" }}>{description}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', mt: 0.5 }}>
                    <Typography sx={infosDescriptionStyle}>
                        <Box component='span' sx={spanDescriptionStyle}>Sex • </Box>{sex}
                        <Box component='span' sx={spanDescriptionStyle}> Age • </Box>{age}
                        <Box component='span' sx={spanDescriptionStyle}> Clr • </Box>{Clr}
                    </Typography>
                    <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="More"
                    >
                        <MoreHorizIcon style={{ fill: '#737373' }} />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}

export default Post;
