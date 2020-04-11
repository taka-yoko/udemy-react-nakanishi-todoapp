import React from "react";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos } = this.props;
    const list = todos.map(todo => {
      return (
        <li key={todo.id}>
          #{todo.id} {todo.title}
          <button
            onClick={() => {
              this.handleDelete(todo.id);
            }}
          >
            delete
          </button>
        </li>
      );
    });
    return (
      <div>
        <h2>List</h2>
        <ul>{list}</ul>
      </div>
    );
  }

  handleDelete = id => {
    const { deleteTodo } = this.props;
    deleteTodo(id);
  };
}
