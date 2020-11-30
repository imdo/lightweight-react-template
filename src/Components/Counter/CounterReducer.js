import { INC_COUNTER } from "./CounterItem/Actions";
import { SAVE_USER } from "./Todo/Actions";
import { SAVE_TODO_LIST } from "./Actions";
const CounterReducer = (state, action) => {
  switch (action.type) {
    case INC_COUNTER:
      return {
        ...state,
        counter: state.counter >= 200 ? 200 : state.counter + 1,
      };
    case SAVE_TODO_LIST:
      return { ...state, todo: action.todo, user: null };
    case SAVE_USER:
      return { ...state, user: action.user };
    default:
      throw new Error();
  }
};

export default CounterReducer;
