import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";

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
}

const spanDescriptionStyle = {
    fontSize: 13, fontWeight: 500, color: "#444B51"
}

const infosDescriptionStyle = {
    fontSize: 13, fontWeight: 400, color: "#737373"
}

function Post({ userName, fullName, avatar, price, imgSrc, timeLeft, description, sex, age, Clr }: PostProps) {
    return (
        <Box sx={{ mb: 4.5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box sx={{ mr: 1 }}>
                        <Avatar alt="Remy Sharp" src={avatar} />
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#444B51" }}>{userName}</Typography>
                        <Typography sx={{ fontSize: 12, color: "#737373" }}>{fullName}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: 500, color: "#444B51" }}>{price}</Typography>
                </Box>
            </Box>
            <Box sx={{ borderRadius: '10px', overflow: 'hidden', position: 'relative', pt: '100%', width: '100%', mb: 1.5 }}>
                <Image
                    src={imgSrc}
                    alt="photo"
                    layout="fill"
                />
            </Box>
            <Box>
                <Typography sx={{ fontSize: 12, fontWeight: 300, color: "#737373" }}>{timeLeft}</Typography>
                <Typography sx={{ color: "#444B51" }}>{description}</Typography>
                <Typography sx={infosDescriptionStyle}>
                    <Box component='span' sx={spanDescriptionStyle}>Sex • </Box>{sex}
                    <Box component='span' sx={spanDescriptionStyle}> Age • </Box>{age}
                    <Box component='span' sx={spanDescriptionStyle}> Clr • </Box>{Clr}
                </Typography>
            </Box>
        </Box>
    );
}

export default Post;
