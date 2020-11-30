export const fetchTodo = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
