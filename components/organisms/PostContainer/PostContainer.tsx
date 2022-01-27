import { Box } from "@mui/material";
import Post from "../../molecules/Post";
import imgSrc from "../../../public/dev-image/c4c0ced405660ba108d1206e5c6c6872.jpg";

const post = {
    userName: "Exclusivekennels",
    fullName: "Daytona Florida",
    avatar: "/dev-image/exclusive.jpg",
    price: "$10,000",
    imgSrc: imgSrc,
    timeLeft: "10 minutes ago",
    description: "Dwayne Douglas Johnson (born May 2, 1972), also known by his ring name The Rock, is an American Canadian actor The Rock.",
    sex: "Male",
    age: "8 weeks",
    Clr: "Merle",
    liked: false,
}

function PostContainer() {
    return (
        <Box sx={{ width: "100%" }}>
            {/* TODO use stack from MUI */}
            <Post {...post} />
            <Post {...post} />
            <Post {...post} />
            <Post {...post} />
            <Post {...post} />
            <Post {...post} />
            <Post {...post} />
        </Box>
    );
}

export default PostContainer;
