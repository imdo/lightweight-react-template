export const SAVE_TODO_LIST = "SAVE_TODO_LIST";
export const saveTodoList = (todo) => ({
  type: SAVE_TODO_LIST,
  todo,
});
