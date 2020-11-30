import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Button, Typography } from "@material-ui/core";
import { saveUser } from "./Actions";
import CounterContext from "../Context";
import { fetchUser } from "./TodoService";
const Todo = () => {
  const {
    dispatch,
    state: { todo, user },
  } = useContext(CounterContext);

  const loadUserInfo = async () => {
    const response = await fetchUser(todo.userId);
    const user = await response.json();
    dispatch(saveUser(user));
  };
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Todo Component
      </Typography>
      title: {todo.title}
      <br />
      <Button variant="contained" onClick={loadUserInfo}>
        load User
      </Button>
      {user && (
        <div>
          <p>name : {user.name}</p>
          <p>username : {user.username}</p>
          <p>phone : {user.phone}</p>
          <p>email : {user.email}</p>
        </div>
      )}
    </div>
  );
};

Todo.propTypes = {};

export default Todo;
