import React, { createContext } from "react";

export const initialState = {
  user: null,
};

const UserContext = createContext(initialState);

export const { Provider } = UserContext;

export default UserContext;
