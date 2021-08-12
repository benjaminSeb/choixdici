import { Card, CardActionArea, CardContent, CardMedia, createStyles, makeStyles, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import test from './images/test.png';

const useStyles = makeStyles(() =>
  createStyles({
    cardMedia: {
      maxHeight: '14em',
    },
  }),
);

const WeeklyEventCard = withStyles({
  root: {
    width: '25em',
    marginTop: '1em',
    marginBottom: '1em',
    marginRight: '-5em',
    borderTopLeftRadius: '3em',
    borderBottomLeftRadius: '3em',
  }
})(Card);

const WeeklyEventCardContent = withStyles({
  root: {
    paddingRight: '6em',
  }
})(CardContent);

function WeeklyEvent() {
  const classes = useStyles();

  return (
    <WeeklyEventCard>
      <CardActionArea>
        <CardMedia
          className={classes.cardMedia}
          component="img"
          alt="Contemplative Reptile"
          image={test}
          title="Contemplative Reptile"
        />
        <WeeklyEventCardContent>
          <Typography gutterBottom variant="h5" component="h2">
            L'évènement de la semaine
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Nom Event, le Date Event
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lieu Event
          </Typography>
        </WeeklyEventCardContent>
      </CardActionArea>
    </WeeklyEventCard>
  );
}

export default WeeklyEvent;