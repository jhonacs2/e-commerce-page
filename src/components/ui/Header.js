import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { findByLabelText } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";

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
  },
}));

export const Header = () => {
  const { header, logo, menuButton, toolbar } = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {sneakersLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const sneakersLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      sneakers
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
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
};
