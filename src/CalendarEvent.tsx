import { createStyles, makeStyles, Paper, Typography, withStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import WeeklyEvent from './WeeklyEvent';
import { getEventsOfDay, IEvent } from './EventUtil';
import EventDay from './EventDay';

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
        {events.map((thatEvent: IEvent, i) => {
          return <EventDay name={thatEvent.name} location={thatEvent.location} date={thatEvent.date} />;
        })}
      </DayEventPaper>
    </div>
  );
}

export default CalendarEvent;