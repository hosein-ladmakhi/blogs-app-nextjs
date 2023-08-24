import styled from "@emotion/styled";
import {
  AppBar,
  List as MuiList,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
  useMediaQuery,
  IconButton,
  Box,
  colors,
  Drawer as MuiDrawer,
  Avatar,
} from "@mui/material";
import Link from "next/link";
import { Menu as MenuIcon } from "@mui/icons-material";

const menuItems = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "blogs",
    path: "/blogs",
  },
  {
    text: "login",
    path: "/auth/signin",
  },
  {
    text: "signup",
    path: "/auth/signup",
  },
  {
    text: "dashboard",
    path: "/dashboard",
  },
];

const List = styled(MuiList)(() => ({
  display: "flex",
  marginLeft: "auto",
}));

const Drawer = styled(MuiDrawer)(() => ({
  "& .MuiPaper-root": {
    width: "400px",
  },
}));

export default function NavMenu() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <AppBar variant="elevation" position="relative">
      <Toolbar>
        <Typography
          variant="logoText"
          component="h1"
          letterSpacing="1px"
          fontWeight="bold"
        >
          Blogs Clone
        </Typography>
        {!isMobile && (
          <List disablePadding>
            {menuItems.map((menuItem) => (
              <ListItem disableGutters disablePadding key={menuItem.path}>
                <ListItemButton LinkComponent={Link} href={menuItem.path}>
                  {menuItem.text}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
        {isMobile && (
          <>
            <Box ml="auto">
              <IconButton>
                <MenuIcon htmlColor={colors.indigo[100]} fontSize="large" />
              </IconButton>
            </Box>
            <Drawer anchor="left" open>
              <Box display="flex" alignItems="center">
                <Avatar />
                <Box>
                  <Typography>Hosein Ladmakhi nejad</Typography>
                  <Typography>hoseinladmakhinejad@gmail.com</Typography>
                </Box>
              </Box>
              <MuiList>
                {menuItems.map((menuItem) => (
                  <ListItem key={menuItem.path}>
                    <ListItemButton LinkComponent={Link} href={menuItem.path}>
                      {menuItem.text}
                    </ListItemButton>
                  </ListItem>
                ))}
              </MuiList>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
