import { Typography, ListItem, ListItemButton, ListItemIcon } from "@mui/material";

const IconStyle = {
    fill: '#737373',
}

type ItemProps = {
    text: string,
    Icon: any,
    handleClick: (event: Event | React.SyntheticEvent) => void,
}

function SideMenuList({ Icon, text, handleClick }: ItemProps) {
    return (
        <ListItem onClick={handleClick} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    {<Icon style={IconStyle} />}
                </ListItemIcon>
                <Typography sx={{ fontWeight: 500, color: "#444B51" }}>{text}</Typography>
            </ListItemButton>
        </ListItem>
    );
}

export default SideMenuList;
