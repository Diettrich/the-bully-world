import { Box, List } from "@mui/material";
import {
    LoginIcon,
    PetsIcon,
    PaidIcon,
    DescriptionIcon
} from "../../atoms/icons";
import SideMenuList from "../../atoms/SideMenuList";

function SideMenu() {
    // TODO: remove style from Box
    return (
        <Box sx={{ height: 500, width: "100%" }}>
            <List>
                <SideMenuList Icon={LoginIcon} text="Login" />
                <SideMenuList Icon={PetsIcon} text="Breeders List" />
                <SideMenuList Icon={PaidIcon} text="Membership" />
                <SideMenuList Icon={DescriptionIcon} text="Faqs" />
            </List>
        </Box>
    );
}

export default SideMenu;
