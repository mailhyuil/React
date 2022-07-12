import React from "react";

const TodoItem = ({ todoList }) => {
  return todoList.map((todo) => {
    return (
      <tr key={todo.id}>
        <th>{todo.s_date}</th>
        <th>{todo.content}</th>
      </tr>
    );
  });
};

export default TodoItem;
