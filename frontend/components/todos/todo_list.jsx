import React from 'react';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.todos);
    return (
      <div>
        <ul>
          {this.props.todos.map( todo => {
            console.log(todo);
            return <li>{todo.title}</li>
          })}
        </ul>
      </div>
    )
  }

}

export default TodoList;