import React, { useContext, useEffect, useState } from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import ConnectedStore from "Shared/ConnectedStore";

import { saveTodoList } from "./Actions";
import CounterItem from "./CounterItem/CounterItemView";
import { Provider, initialState } from "./Context";
import CounterReducer from "./CounterReducer";
import { fetchTodo } from "./CounterService";
import CounterContext from "./Context";
import Todo from "./Todo";
const CounterView = () => {
  const {
    dispatch,
    state: { counter },
  } = useContext(CounterContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const data = await (await fetchTodo(counter)).json();
      setLoading(false);
      dispatch(saveTodoList(data));
    }
    fetchData();
  }, [setLoading, dispatch, counter]);
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <CounterItem />
        </Grid>
        <Grid item xs={12} md={6}>
          {loading ? <LinearProgress /> : <Todo />}
        </Grid>
      </Grid>
    </div>
  );
};

CounterView.propTypes = {};

export default ConnectedStore(
  CounterView,
  CounterReducer,
  initialState,
  Provider
);
