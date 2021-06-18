import { createStyles, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    editoDiv: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#53BE4F',
    },
    editoTypo: {
      color : 'rgb(255, 255, 255)',
      fontWeight: 'bold',
      margin: '1em',
    },
    editTypoText: {
      color : 'rgb(255, 255, 255)',
      maxWidth: '33%',
      marginRight: '1em',
      fontWeight: 'bold',
    }
  }),
);

function Edito() {
  const classes = useStyles();

  return (
    <div className={classes.editoDiv} >
      <Typography variant='h2' component='h2' className={classes.editoTypo}>édito</Typography>
      <Typography variant="body1" component="p" className={classes.editTypoText}>
        Nous invitons tous les porteurs d’initiatives à nous contacter, 
        afin de pouvoir vous offrir le répertoire le plus complet possible 
        de tout ce qui contribue au « bien vivre ensemble » sur notre secteur.
      </Typography>
    </div>
  );
}

export default Edito;
