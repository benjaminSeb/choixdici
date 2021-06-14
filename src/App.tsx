import { createStyles, makeStyles } from '@material-ui/core';
import React from 'react';
import MenuBar from './MenuBar';

const useStyles = makeStyles(() =>
  createStyles({
    app: {
      display: 'grid',
      gridTemplateColumns: '20% 60% 20%',
      gap: '10px',
      '& *': {
        border: '1px dotted',
      }
    },
  }),
);

function App() {
  const classes = useStyles();

  return (
    <div>
      <MenuBar/>
    </div>
  );
}

export default App;
