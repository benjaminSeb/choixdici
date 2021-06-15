import { createStyles, makeStyles, Paper, Typography, withStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
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

function CalendarEvent() {
  const classes = useStyles();
  const [value, onChange] = useState(new Date());

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
      <DayEventPaper elevation={0} className={classes.dayEvents}>
        <Typography variant="h5" component="h2">
          Nom Event
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lieu Event, le Date Event
        </Typography>
      </DayEventPaper>
    </div>
  );
}

export default CalendarEvent;