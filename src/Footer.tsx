import { Button, createStyles, makeStyles, Typography, withStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    footer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#53BE4F',
    },
    menu: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    home: {
      display: 'flex',
      justifyContent: 'center',
    }
  }),
);

const HomeButton = withStyles({
  root: {
    fontFamily: 'Poppins, Sans-serif',
    fontSize: '25px',
    fontWeight: 'bold',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'white',
    }
  },
})(Button);

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.home}>
        <HomeButton>
          <Typography>choix </Typography>
          <Typography>d'ici</Typography>
        </HomeButton>
        <Typography>REPERTOIRE DES INITIATIVES LOCALES</Typography>
      </div>
      <div className={classes.menu}>
      </div>
    </div>
  );
}

export default Footer;