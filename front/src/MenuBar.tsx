import { Button, createStyles, makeStyles, withStyles } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { ToggleButton } from '@material-ui/lab';
import { ActivePageEnum } from './ActivePageEnum';

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
    borderRadius: '2em',
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

interface IMenuBarProps {
  setActivePage: (param: ActivePageEnum) => void;
  activePage: ActivePageEnum;
}

function MenuBar(props: IMenuBarProps) {
  const classes = useStyles();
  const {activePage, setActivePage} = props;

  const handleMenuButtonClick = (value: ActivePageEnum): void => {
    setActivePage(value);
  }

  return (
    <div className={classes.header}>
      <div className={classes.home}>
        <HomeButton onClick={() => handleMenuButtonClick(ActivePageEnum.HOME)}>
          <HomeIcon fontSize='large' />
          choix d'ici
        </HomeButton>
      </div>
      <div className={classes.menu}>
        <MenuButton onClick={() => handleMenuButtonClick(ActivePageEnum.AGENDA)} selected={activePage === ActivePageEnum.AGENDA} >
          Agenda
        </MenuButton>
        <MenuButton onClick={() => handleMenuButtonClick(ActivePageEnum.REPERTOIRE)} selected={activePage === ActivePageEnum.REPERTOIRE} >
          Répertoire
        </MenuButton>
        <MenuButton onClick={() => handleMenuButtonClick(ActivePageEnum.REPORTAGES)} selected={activePage === ActivePageEnum.REPORTAGES} >
          Reportages
        </MenuButton>
        <MenuButton onClick={() => handleMenuButtonClick(ActivePageEnum.CONTACTS)} selected={activePage === ActivePageEnum.CONTACTS} >
          Contacts
        </MenuButton>
      </div>
    </div>
  );
}

export default MenuBar;