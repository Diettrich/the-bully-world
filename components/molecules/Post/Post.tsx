import React, { useState } from "react";
import Image from "next/image";
import { Avatar, Box, Typography, IconButton } from "@mui/material";
import { keyframes } from '@mui/system';
import { css } from '@emotion/react';
import { MoreHorizIcon, FavoriteIcon, MapsUgcIcon, ReportIcon } from "../../atoms/icons";
import Menu from '../../organisms/Menu';
import MenuItem from '../../atoms/MenuItem';

type PostProps = {
    id: string | number,
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


function Post({ id, userName, fullName, avatar, price, imgSrc, timeLeft, description, sex, age, Clr, liked }: PostProps) {

    const [likedState, setLikedState] = useState(liked);

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

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
                {/* TODO */}
                {/* fixe this, make it like story Item */}
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
                        ref={anchorRef}
                        id={`post-menu-button-${id}`}
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        <MoreHorizIcon style={{ fill: '#737373' }} />
                    </IconButton>
                    <Menu
                        menuOptions={{
                            open,
                            anchorRef,
                            handleClose,
                            handleListKeyDown,
                            placement: "bottom-end",
                            id: `post-menu-${id}`,
                            ariaLabelledby: `post-menu-button-${id}`,
                        }}
                        sx={{ width: 160 }}
                    >
                        <MenuItem handleClick={handleClose} Icon={MapsUgcIcon} text="Message" />
                        <MenuItem handleClick={handleClose} Icon={ReportIcon} text="Report" />
                    </Menu>
                </Box>
            </Box>
        </Box >
    );
}

export default Post;
