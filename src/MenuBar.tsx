import { Button, createStyles, makeStyles, withStyles } from '@material-ui/core';
import { useState } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { ToggleButton } from '@material-ui/lab';

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      display: 'flex',
      justifyContent: 'space-around',
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

const MenuButton = withStyles({
  root: {
    boxShadow: 'none',
    fontFamily: 'Poppins, Sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'none',
    lineHeight: 'normal',
    height: '2em',
    borderRadius: '15px',
    border: '1px solid',
    borderColor: '#E1E1E1',
    marginLeft: '10px',
    marginRight: '10px',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'rgb(58, 170, 53)',
      color: 'rgb(255, 255, 255)',
    },
    '&:focus': {
      boxShadow: 'none',
      backgroundColor: 'rgb(58, 170, 53)',
      border: 'none',
      color: 'rgb(255, 255, 255)',
    },
    '&.Mui-selected': {
      boxShadow: 'none',
      backgroundColor: 'rgb(58, 170, 53)',
      border: 'none',
      color: 'rgb(255, 255, 255)',
    },
  },
})(ToggleButton);

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

const HomeIcon = withStyles({
  root: {
    color : 'rgb(58, 170, 53)',
  },
})(LocationOnIcon);

function MenuBar() {
  const classes = useStyles();
  const [activeItem, setActiveMenu] = useState('home');

  const handleMenuButtonClick = (value: string): void => {
    setActiveMenu(value);
  }

  return (
    <div className={classes.header}>
      <div className={classes.home}>
        <HomeButton>
          <HomeIcon fontSize='large' />
          choix d'ici
        </HomeButton>
      </div>
      <div className={classes.menu}>
        <MenuButton onClick={() => handleMenuButtonClick('home')} selected={activeItem === 'home'} >
          Accueil
        </MenuButton>
        <MenuButton onClick={() => handleMenuButtonClick('agenda')} selected={activeItem === 'agenda'} >
          Agenda
        </MenuButton>
        <MenuButton onClick={() => handleMenuButtonClick('repertoire')} selected={activeItem === 'repertoire'} >
          Répertoire
        </MenuButton>
        <MenuButton onClick={() => handleMenuButtonClick('reportages')} selected={activeItem === 'reportages'} >
          Reportages
        </MenuButton>
        <MenuButton onClick={() => handleMenuButtonClick('forum')} selected={activeItem === 'forum'} >
          Forum
        </MenuButton>
        <MenuButton onClick={() => handleMenuButtonClick('contacts')} selected={activeItem === 'contacts'} >
          Contacts
        </MenuButton>
      </div>
    </div>
  );
}

export default MenuBar;