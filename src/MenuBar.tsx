import { Button, createStyles, makeStyles, withStyles } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    menu: {
      display: 'block',
      textAlign: 'center',
    },
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
    borderRadius: '40px',
    marginLeft: '10px',
    marginRight: '10px',
    '&:focus': {
      boxShadow: 'none',
      backgroundColor: 'rgb(58, 170, 53)',
      borderColor: '#000000',
      color: 'rgb(255, 255, 255)',
    },
  },
})(Button);

function MenuBar() {
  const classes = useStyles();
  const [activeItem, setActiveMenu] = useState('home');

  const handleHomeButtonClick = (): void => {
    setActiveMenu('home');
  }

  const handleAgendaButtonClick = (): void => {
    setActiveMenu('agenda');
  }

  const handleRepertoireButtonClick = (): void => {
    setActiveMenu('repertoire');
  }

  const handleReportagesButtonClick = (): void => {
    setActiveMenu('reportages');
  }

  const handleForumButtonClick = (): void => {
    setActiveMenu('forum');
  }

  const handleContactsButtonClick = (): void => {
    setActiveMenu('contacts');
  }

  return (
      <div className={classes.menu}>
        <MenuButton onClick={handleHomeButtonClick}>
          Accueil
        </MenuButton>
        <MenuButton onClick={handleAgendaButtonClick}>
          Agenda
        </MenuButton>
        <MenuButton onClick={handleRepertoireButtonClick}>
          Répertoire
        </MenuButton>
        <MenuButton onClick={handleReportagesButtonClick}>
          Reportages
        </MenuButton>
        <MenuButton onClick={handleForumButtonClick}>
          Forum
        </MenuButton>
        <MenuButton onClick={handleContactsButtonClick}>
          Contacts
        </MenuButton>
      </div>
  );
}

export default MenuBar;