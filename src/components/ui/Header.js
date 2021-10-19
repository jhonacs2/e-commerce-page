import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const headersData = [
  {
    label: 'Listings',
    href: '/listings',
  },
  {
    label: 'Mentors',
    href: '/mentors',
  },
  {
    label: 'My Account',
    href: '/account',
  },
  {
    label: 'Log Out',
    href: '/logout',
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#400CCC',
  },
  logo: {
    fontFamily: 'Kumbh Sans',
    fontWeight: 700,
    color: '#FFFEFE',
    textAlign: 'left',
  },
}));

export const Header = () => {
  const { header, logo } = useStyles();

  const displayDesktop = () => {
    return <Toolbar>{femmecubatorLogo}</Toolbar>;
  };

  const femmecubatorLogo = (
    <Typography variant='h6' component='h1' className={logo}>
      sneakers
    </Typography>
  );

  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
};
