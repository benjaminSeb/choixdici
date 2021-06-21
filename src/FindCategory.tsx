import { Button, createStyles, makeStyles, withStyles } from '@material-ui/core';
import React from 'react';
import { getCategories } from './Category';

const useStyles = makeStyles(() =>
  createStyles({
    editoDiv: {
      width: '100%',
    },
  }),
);

const CategoryButton = withStyles({
  root : {
    backgroundColor: 'white',
    margin: '2em',
    padding: '1em',
    fontSize: '25px',
    borderRadius: '2em',
    fontWeight: 'bold',
    textTransform: 'none',
  }
})(Button);

function FindCategory() {
  const classes = useStyles();

  return (
    <div className={classes.editoDiv} >
      {
        getCategories().map((value, index) => {
          return <CategoryButton>{value}</CategoryButton>
        })
      }
    </div>
  );
}

export default FindCategory;
