import { Card, CardContent, CardMedia, createStyles, makeStyles, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import { ActivePageEnum } from './ActivePageEnum';
import { getEventsOfDay, IEvent } from './EventUtil';
import test from './images/test.png';

interface IAgendaPageProps {
  pageProps: {
    setActivePage: (param: ActivePageEnum) => void;
  };
}

const useStyles = makeStyles(() =>
  createStyles({
    agenda: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  }),
);

const AgendaEventCard = withStyles({
  root: {
    width: '10em',
    margin: '1%',
    border: '2em',
  }
})(Card);

function AgendaPage(props: IAgendaPageProps) {
  const classes = useStyles();

  return (
    <div className={classes.agenda}>
      {getEventsOfDay().map((thatEvent: IEvent) => {
        return (<AgendaEventCard>
          <CardMedia
            component="img"
            image={test}
          />
          <CardContent>
            <Typography variant="h6" color="textSecondary">
              {thatEvent.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {thatEvent.location}<br/>
              {thatEvent.date}
            </Typography>
          </CardContent>
        </AgendaEventCard>)
      })}
    </div>
  );
}

export default AgendaPage;
