import { Button, createStyles, makeStyles, Paper, withStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import EventDay from './EventDay';
import { getEventsOfDay, IEvent } from './EventUtil';
import WeeklyEvent from './WeeklyEvent';

const useStyles = makeStyles(() =>
  createStyles({
    calendarEvent: {
      display: 'flex',
      justifyContent: 'center',
      margin: '2em',
    },
    dateSelector: {
      border: 'none',
      '& *': {
        borderRadius: '3em',
      }
    },
    dayEvents: {
      width: '20em',
    }
  }),
);

const CalendarPaper = withStyles({
  root: {
    padding: '2em',
    borderRadius : '3em',
    zIndex: 1,
  },
})(Paper);

const DayEventPaper = withStyles({
  root: {
    padding: '2em',
  }
})(Paper);

const VoirPlusButton = withStyles({
  root : {
    backgroundColor: 'white',
    width: '100%',
    marginTop: '1em',
    borderRadius: '2em',
    fontWeight: 'bold',
    textTransform: 'none',
  }
})(Button);

function CalendarEvent() {
  const classes = useStyles();
  const [value, onChange] = useState(new Date());
  const events = getEventsOfDay();

  return (
    <div className={classes.calendarEvent}>
      <WeeklyEvent/>
      <CalendarPaper elevation={3} >
        <Calendar
          className={classes.dateSelector}
          onChange={onChange}
          value={value}
        />
      </CalendarPaper>
      <DayEventPaper elevation={0} className={classes.dayEvents} >
        {events.slice(0, 3).map((thatEvent: IEvent, i) => {
          return <EventDay event={thatEvent} />;
        })}
        {events.length > 3 && 
          <VoirPlusButton variant="contained">Voir +</VoirPlusButton>
        }
      </DayEventPaper>
    </div>
  );
}

export default CalendarEvent;