import React, { useReducer } from "react";

const ConnectTo = ({
  reducer,
  initialState,
  Provider,
  Component,
  ...props
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Provider value={{ state, dispatch }}>
      <Component {...props} />
    </Provider>
  );
};
const ConnectedStore = (Component, reducer, initialState, Provider) => (
  props
) => {
  return (
    <ConnectTo
      Component={Component}
      reducer={reducer}
      initialState={initialState}
      Provider={Provider}
      {...props}
    />
  );
};

ConnectedStore.propTypes = {};

export default ConnectedStore;
