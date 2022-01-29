import React from 'react';
import { Paper, MenuList, Popper, Grow, ClickAwayListener } from '@mui/material';
import { Placement } from '@popperjs/core';


type MenuProps = {
    children: React.ReactNode,
    sx: object,
    menuOptions: MenuOptions,
}

type MenuOptions = {
    anchorRef: React.RefObject<HTMLElement>,
    open: boolean,
    handleClose: (event: Event | React.SyntheticEvent) => void,
    handleListKeyDown: (event: React.KeyboardEvent) => void,
    placement: Placement | undefined,
    id: string | undefined,
    ariaLabelledby: string,
}

export default function Menu({ children, sx, menuOptions }: MenuProps): JSX.Element {
    return (
        <Popper
            open={menuOptions.open}
            anchorEl={menuOptions.anchorRef.current}
            role={undefined}
            placement={menuOptions.placement}
            transition
            disablePortal
            style={{ zIndex: 700, }}
        >
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom', }}
                >
                    <Paper variant="outlined" elevation={0} sx={{ width: 320, maxWidth: '100%', borderRadius: 2, ...sx }}>
                        <ClickAwayListener onClickAway={menuOptions.handleClose}>
                            <MenuList
                                autoFocusItem={menuOptions.open}
                                id={menuOptions.id}
                                aria-labelledby={menuOptions.ariaLabelledby}
                                onKeyDown={menuOptions.handleListKeyDown}
                            >
                                {children}
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )
            }
        </Popper >
    );
}