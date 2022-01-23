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

function Post({ userName, fullName, avatar, price, imgSrc, timeLeft, description, sex, age, Clr }: PostProps) {
    return (
        <Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box sx={{ mr: 2 }}>
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
            <Box sx={{ borderRadius: '10px', overflow: 'hidden', position: 'relative', pt: '100%', width: '100%', mb: 3 }}>
                <Image
                    src={imgSrc}
                    alt="photo"
                    layout="fill"
                />
            </Box>
            <Box>
                <Typography>{timeLeft}</Typography>
                <Typography>{description}</Typography>
                <Typography>{sex} {age} {Clr}</Typography>
            </Box>
        </Box>
    );
}

export default Post;
