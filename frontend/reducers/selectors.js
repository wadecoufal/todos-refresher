export const allTodos = (state) => {
  const todoArr = [];
  Object.keys(state.todos).forEach( todo => {
    todoArr.push({[todo.id]: todo});
  });
  return todoArr;
}