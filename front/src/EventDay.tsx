import { Typography } from '@material-ui/core';
import React from 'react';
import { IEvent } from './EventUtil';

interface IEventDayProps {
  event: IEvent;
}

const EventDay = (props: IEventDayProps) => {
  const {event} = props;

  return (
    <div>
      <Typography variant="h5" component="h2">
        {event.name}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {event.location}, le {event.date}
      </Typography>
    </div>
  );
}

EventDay.defaultProps = {
  event : {
    name: '',
    location: '',
    date: new Date(),
  }
 }

export default EventDay;