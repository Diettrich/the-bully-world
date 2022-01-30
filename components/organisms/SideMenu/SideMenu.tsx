import { Box, List } from "@mui/material";
import {
    LoginIcon,
    PetsIcon,
    PaidIcon,
    DescriptionIcon
} from "../../atoms/icons";
import SideMenuList from "../../atoms/SideMenuList";

import { useAppDispatch } from '../../../app/hooks';
import { openLoginDialog } from '../../../app/appSlice';

function SideMenu() {

    const dispatch = useAppDispatch();

    // TODO: remove style from Box
    return (
        <Box sx={{ height: 500, width: "100%" }}>
            <List>
                <SideMenuList handleClick={() => dispatch(openLoginDialog())} Icon={LoginIcon} text="Login" />
                <SideMenuList handleClick={() => { }} Icon={PetsIcon} text="Breeders List" />
                <SideMenuList handleClick={() => { }} Icon={PaidIcon} text="Membership" />
                <SideMenuList handleClick={() => { }} Icon={DescriptionIcon} text="Faqs" />
            </List>
        </Box>
    );
}

export default SideMenu;
