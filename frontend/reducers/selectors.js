export const allTodos = (state) => {
  const todoArr = [];
  Object.keys(state.todos).forEach( id => {
    todoArr.push(state.todos[id]);
  });
  return todoArr;
}