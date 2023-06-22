import { Avatar, Divider, Drawer, useTheme, List, ListItemButton, ListItemText, ListItemIcon, Icon } from "@mui/material";
import { Box } from "@mui/system";

interface IMenuLateralProps {
    children: React.ReactNode;
}
export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme();

    return (
        <>
            <Drawer variant='permanent'>
                <Box width={theme.spacing(28)} height="100%" display="flex flex-col">
                    <Box width="100%" height={theme.spacing(20)}
                        display="flex" alignItems="center" justifyContent="center">
                        <Avatar sx={{
                            height: theme.spacing(12),
                            width: theme.spacing(12)
                        }} src="https://github.com/jonesrasta.png" />
                    </Box>
                    <Divider />
                    <Box flex={1}>
                        <List component="nav"></List>
                        <ListItemButton>
                            <ListItemIcon>
                                <Icon>home</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Página inicial" />
                        </ListItemButton>

                    </Box>
                </Box>
            </Drawer>
            <Box height="100vw" marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};