import { Box, List } from "@mui/material";
import {
    LoginIcon,
    PetsIcon,
    PaidIcon,
    DescriptionIcon
} from "../../atoms/icons";
import MenuListItem from "../../molecules/MenuListItem";

function SideMenu() {
    return (
        <Box sx={{ height: 500, width: "100%" }}>
            <List>
                <MenuListItem Icon={LoginIcon} text="Login" />
                <MenuListItem Icon={PetsIcon} text="Breeders List" />
                <MenuListItem Icon={PaidIcon} text="Membership" />
                <MenuListItem Icon={DescriptionIcon} text="Faqs" />
            </List>
        </Box>
    );
}

export default SideMenu;
