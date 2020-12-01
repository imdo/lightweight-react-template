import React, { useContext } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CounterContext from "../Context";
import { incrementCounter } from "./Actions";
import style from "./style";
const useStyles = makeStyles(style);

const CounterItemView = () => {
  const {
    state: { counter },
    dispatch,
  } = useContext(CounterContext);
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Counter Component
      </Typography>
      <Grid container>
        <Button
          className={classes.counterItems}
          variant="contained"
          color="primary"
          onClick={() => dispatch(incrementCounter())}
        >
          increment button
        </Button>
        <p className={`${classes.counterItems} ${classes.centerText}`}>
          counter:{counter}
        </p>
      </Grid>
    </div>
  );
};

CounterItemView.propTypes = {};

export default CounterItemView;
