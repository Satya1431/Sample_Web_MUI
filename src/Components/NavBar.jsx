import {
  AppBar,
  Avatar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import SpaIcon from "@mui/icons-material/Spa";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icon = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Satya
        </Typography>
        <SpaIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search" />
        </Search>
        <Icon>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=740&t=st=1717751718~exp=1717752318~hmac=606a30d4c62c5816f6323d4b319d6b5a361af20a7aa729eb376dbc2552235cdd"
            onClick={() => {
              setOpen(!open);
            }}
          />
        </Icon>
        <UserBox>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=740&t=st=1717751718~exp=1717752318~hmac=606a30d4c62c5816f6323d4b319d6b5a361af20a7aa729eb376dbc2552235cdd"
            onClick={() => {
              setOpen(!open);
            }}
          />
          <Typography variant="span">Satya</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>{
          setOpen(false)
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>My account</MenuItem>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
