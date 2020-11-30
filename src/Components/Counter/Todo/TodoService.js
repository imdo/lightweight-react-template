export const fetchUser = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
