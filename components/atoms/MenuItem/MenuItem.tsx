import { MenuItem as Item, ListItemIcon, Typography } from '@mui/material';

type MenuItemProps = {
    // Icon: React.ReactNode,
    Icon?: any,
    text: string,
    handleClick: (event: Event | React.SyntheticEvent) => void,
}

const iconMenuStyle = {
    fill: '#737373',
}

function MenuItem({ Icon, text, handleClick }: MenuItemProps): JSX.Element {
    return (
        <Item onClick={handleClick}>
            {Icon &&
                <ListItemIcon>
                    <Icon style={iconMenuStyle} />
                </ListItemIcon>
            }
            <Typography sx={{ fontWeight: 500, color: "#444B51" }}>{text}</Typography>
        </Item>
    );
}

export default MenuItem;
