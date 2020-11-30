import { createContext } from "react";

export const initialState = {
  todo: {},
  counter: 1,
  user: null,
};
const CounterContext = createContext(initialState);

export const { Provider } = CounterContext;
export default CounterContext;
