import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  makeStyles,
  Toolbar,
  Link,
  Typography,
  MenuItem,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "Collections",
    href: "/collections",
  },
  {
    label: "Men",
    href: "/men",
  },
  {
    label: "Women",
    href: "/women",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Kumbh Sans",
    fontWeight: 700,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Kumbh Sans, sans-serif",
    fontWeight: 400,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  logoOdin: {
    textDecoration: "none",
  },
  drawerContainer: {
    fontFamily: "Kumbh Sans, sans-serif",
    padding: "20px 30px",

    // color: "white",
  },
  paper: {
    background: "blue",
  },
}));

export const Header = () => {
  const {
    header,
    logo,
    menuButton,
    toolbar,
    logoOdin,
    drawerContainer,
    paper,
  } = useStyles();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <Link to="/" className={logoOdin}>
          {odinLogo}
        </Link>
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    };
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div>
          {" "}
          <Link to="/" className={logoOdin}>
            {odinLogo}
          </Link>
        </div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          {" "}
          <MenuItem style={{ fontFamily: "Kumbh Sans, sans-serif" }}>
            {label}
          </MenuItem>
        </Link>
      );
    });
  };

  const odinLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      OdinShop
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: Link,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
};
