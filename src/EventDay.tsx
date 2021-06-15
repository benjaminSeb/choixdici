import { Typography } from '@material-ui/core';
import React from 'react';
import { IEvent } from './EventUtil';

const EventDay = ({name, location, date}: IEvent) => {
  return (
    <div>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {location}, le {date}
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