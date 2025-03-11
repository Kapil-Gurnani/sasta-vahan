import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  SvgIcon,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Icon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Home } from "@mui/icons-material";

const VehicaHamburgerIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 28 21">
    <g id="vehica-menu-svg" transform="translate(-11925 99)">
      <rect width="28" height="4.2" rx="1.5" transform="translate(11925 -99)" fill="#E31E24" />
      <rect width="19.6" height="4.2" rx="1.5" transform="translate(11925 -90.6)" fill="#E31E24" />
      <rect width="14" height="4.2" rx="1.5" transform="translate(11925 -82.2)" fill="#E31E24" />
    </g>
  </SvgIcon>
);

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(90); // Default height
  const [padding, setPadding] = useState("0 24px"); // Default height

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY === 0) {
        // Scrolling down, reduce height
        setHeaderHeight(90);
        setPadding("0 24px")
      } else {
        // Scrolling up, increase height
        
        setHeaderHeight(75);
        setPadding("0px");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <AppBar position="fixed" sx={{ backgroundColor: "white !important", height: `${headerHeight}px`, transition: "height 0.3s ease-in-out", fontFamily: '"Poppins" !important' }}>
      <Toolbar sx={{ padding: `${padding} !important`,transition: "padding 0.3s ease-in-out",  margin: "7px", fontFamily: '"Poppins" !important', flexDirection: 'row-reverse', justifyContent: 'flex-end' }}>
      
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between', width: '100%' }}>
          <a href="https://sastavahan.in" title="Sasta Vahan">
            <img
              src="https://sastavahan.in/wp-content/uploads/2024/05/Sastavahan-logo-final-2-1-1-300x74.png"
              alt="Sasta Vahan"
              style={{ height: "47px", paddingLeft: "44px", marginTop: "4px" }}
            />
          </a>
          <Box >
          <IconButton
            color="inherit"
            edge="start"
            // onClick={() => toggleDrawer(true)}
          >
            <a href="https://sastavahan.in" title="Sasta Vahan">
            <Home fontSize="large" />
            </a>
          </IconButton>
        </Box>
          {/* <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              alignItems: "center",
              color: "black",
              textTransform: "none",
            }}
            style={{ marginLeft: "61px", height: '70px', marginTop: '-4px',fontFamily: '"Poppins" !important' }}
          >
            <Button color="inherit" href="https://sastavahan.in" style={{ textTransform: "none", fontSize:'15px', marginRight: '8px', fontWeight: 500, letterSpacing: 'normal',fontFamily: '"Poppins" !important' }}>
              Home
            </Button>
            <Button
              color="inherit"
              href="https://sastavahan.in/buy-car"
              style={{ textTransform: "none", fontSize:'15px', marginLeft: '8px', marginRight: '9px', fontWeight: 500, letterSpacing: 'normal', fontFamily: '"Poppins" !important' }}
            >
              Buy Car
            </Button>
            <Button
              color="inherit"
              href="https://sastavahan.in/buy-premium/"
              style={{ textTransform: "none", fontSize:'15px', marginLeft: '9px', marginRight: '10px', fontWeight: 500, letterSpacing: 'normal' }}
            >
              Buy Premium
            </Button>
            <Button
              color="inherit"
              href="#notify-me"
              style={{ textTransform: "none", fontSize:'15px', marginLeft: '9px', marginRight: '10px', fontWeight: 500, letterSpacing: 'normal' }}
            >
              Notify Me
            </Button>
            <Button
              color="inherit"
              onClick={handleServicesMenuOpen}
              style={{ textTransform: "none", fontSize:'15px', marginLeft: '9px', marginRight: '9px', fontWeight: 500, letterSpacing: 'normal' }}
            >
              Services
              <KeyboardArrowDownIcon className="icon-top-bar" style={{paddingLeft: '7px'}}/>
            </Button>
            <Button
              color="inherit"
              href="https://sell-your-car.sastavahan.in/"
              style={{ textTransform: "none", fontSize:'15px', marginLeft: '5px', marginRight: '10px', fontWeight: 500, letterSpacing: 'normal' }}
            >
              Sell Your Car
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleServicesMenuClose}
            >
              <MenuItem
                onClick={handleServicesMenuClose}
                component="a"
                href="https://sastavahan.in/car-loan/"
              >
                Car Loan
              </MenuItem>
              <MenuItem
                onClick={handleServicesMenuClose}
                component="a"
                href="https://sastavahan.in/emi-loan/"
              >
                Loan Calculator
              </MenuItem>
            </Menu>
          </Box> */}
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
        {/* <Box
          sx={{
            display: { xs: "none", md: "flex" },
            // gap: 2,
            alignItems: "center",
            color: "black",
            textTransform: "none",
          }}
          style={{ textTransform: "none", fontSize:'15px', fontWeight: 500, letterSpacing: 'normal' }}
        >
          <Button
            color="inherit"
            href="https://sastavahan.in/login-register/"
            style={{ textTransform: "none", fontSize:'15px', fontWeight: 500, letterSpacing: 'normal', marginLeft: '55px' }}
          >
            <FontAwesomeIcon icon={faUser} style={{marginRight:'25px'}} />
            Log in
          </Button>
          
          <div style={{
            display: "inline-block",
            height: "18px",
            width: "0.5px",
            position: "relative",
            background: "#50514f",
            marginLeft: "15px",
            marginRight: "8px"
          }}></div>
          <Button
            color="inherit"
            href="https://sastavahan.in/login-register/"
            style={{ textTransform: "none", fontSize:'15px', fontWeight: 500, letterSpacing: 'normal', marginLeft: '10px', marginRight:'20px' }}
          >
            Register
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon fontSize="15px" fontWeight="900" />}
            href="https://sastavahan.in/panel/?action=create"
            sx={{ backgroundColor: "#E31E24", color: "white" }}
            style={{ textTransform: "none", fontSize:'15px', height: '50px', fontWeight: 600, letterSpacing: 'normal' }}
          >
            Add Listing
          </Button>
        </Box> */}

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => toggleDrawer(true)}
          >
            <VehicaHamburgerIcon />
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
            {/* <List>
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
            </List> */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                <PhoneIcon sx={{ mr: 1 }} />
                <a
                  href="tel:8500111101"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  8500-111-101
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
