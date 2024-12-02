import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleServicesMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#E31E24" }}>
      <Toolbar sx={{ justifyContent: "space-between", margin: "10px" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <a href="https://sastavahan.in" title="Sasta Vahan">
            <img
              src="https://sastavahan.in/wp-content/uploads/2024/05/Sastavahan-logo-final-2-1-1-300x74.png"
              alt="Sasta Vahan"
              style={{ height: "47px", paddingLeft: "42px", marginTop: "3px" }}
            />
          </a>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              alignItems: "center",
              color: "black",
              textTransform: "none",
            }}
            style={{ marginLeft: "50px", height: '70px' }}
          >
            <Button color="inherit" href="/" style={{ textTransform: "none", fontSize:'16px' }}>
              Home
            </Button>
            <Button
              color="inherit"
              href="https://sastavahan.in/buy-car"
              style={{ textTransform: "none", fontSize:'16px' }}
            >
              Buy Car
            </Button>
            <Button
              color="inherit"
              href="/buy-premium"
              style={{ textTransform: "none", fontSize:'16px' }}
            >
              Buy Premium
            </Button>
            <Button
              color="inherit"
              href="#notify-me"
              style={{ textTransform: "none", fontSize:'16px' }}
            >
              Notify Me
            </Button>
            <Button
              color="inherit"
              onClick={handleServicesMenuOpen}
              style={{ textTransform: "none", fontSize:'16px' }}
            >
              Services
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleServicesMenuClose}
            >
              <MenuItem
                onClick={handleServicesMenuClose}
                component="a"
                href="/car-loan"
              >
                Car Loan
              </MenuItem>
              <MenuItem
                onClick={handleServicesMenuClose}
                component="a"
                href="/emi-loan"
              >
                Loan Calculator
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Desktop Menu */}
        {/* <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            alignItems: "center",
            color: "black",
            textTransform: "none",
          }}
        >
          <Button color="inherit" href="/" style={{ textTransform: "none" }}>
            Home
          </Button>
          <Button
            color="inherit"
            href="https://sastavahan.in/buy-car"
            style={{ textTransform: "none" }}
          >
            Buy Car
          </Button>
          <Button
            color="inherit"
            href="/buy-premium"
            style={{ textTransform: "none" }}
          >
            Buy Premium
          </Button>
          <Button
            color="inherit"
            href="#notify-me"
            style={{ textTransform: "none" }}
          >
            Notify Me
          </Button>
          <Button
            color="inherit"
            onClick={handleServicesMenuOpen}
            style={{ textTransform: "none" }}
          >
            Services
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleServicesMenuClose}
          >
            <MenuItem
              onClick={handleServicesMenuClose}
              component="a"
              href="/car-loan"
            >
              Car Loan
            </MenuItem>
            <MenuItem
              onClick={handleServicesMenuClose}
              component="a"
              href="/emi-loan"
            >
              Loan Calculator
            </MenuItem>
          </Menu>
        </Box> */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            alignItems: "center",
            color: "black",
            textTransform: "none",
          }}
          style={{ textTransform: "none", fontSize:'16px' }}
        >
          <Button
            color="inherit"
            href="/login-register"
            style={{ textTransform: "none", fontSize:'16px' }}
          >
            Log in
          </Button>
          <Button
            color="inherit"
            href="/login-register"
            style={{ textTransform: "none", fontSize:'16px' }}
          >
            Register
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            href="/panel/?action=create"
            sx={{ backgroundColor: "#E31E24", color: "white" }}
            style={{ textTransform: "none", fontSize:'16px' }}
          >
            Add Listing
          </Button>
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Mobile Drawer */}
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          <Box
            sx={{ width: 250, padding: 2, color: "black" }}
            role="presentation"
          >
            <List>
              <ListItem button component="a" href="/">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component="a" href="/buy-car">
                <ListItemText primary="Buy Car" />
              </ListItem>
              <ListItem button component="a" href="/buy-premium">
                <ListItemText primary="Buy Premium" />
              </ListItem>
              <ListItem button component="a" href="#notify-me">
                <ListItemText primary="Notify Me" />
              </ListItem>
              <ListItem button onClick={handleServicesMenuOpen}>
                <ListItemText primary="Services" />
              </ListItem>
              <List component="div" disablePadding sx={{ paddingLeft: 4 }}>
                <ListItem button component="a" href="/car-loan">
                  <ListItemText primary="Car Loan" />
                </ListItem>
                <ListItem button component="a" href="/emi-loan">
                  <ListItemText primary="Loan Calculator" />
                </ListItem>
              </List>
              <ListItem button component="a" href="/login-register">
                <ListItemText primary="Log in" />
              </ListItem>
              <ListItem button component="a" href="/login-register">
                <ListItemText primary="Register" />
              </ListItem>
              <ListItem button component="a" href="/panel/?action=create">
                <AddIcon sx={{ mr: 1 }} />
                <ListItemText primary="Add Listing" />
              </ListItem>
            </List>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                <PhoneIcon sx={{ mr: 1 }} />
                <a
                  href="tel:8600111101"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  8600-111-101
                </a>
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                <EmailIcon sx={{ mr: 1 }} />
                <a
                  href="mailto:customersupport@sastavahan.in"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  customersupport@sastavahan.in
                </a>
              </Typography>
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
