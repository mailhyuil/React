import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList }) => {
  return (
    <table className="w3-table w3-table-all">
      <thead>
        <tr>
          <th>s_date</th>
          <th>todo</th>
        </tr>
      </thead>
      <tbody>
        <TodoItem todoList={todoList} />
      </tbody>
    </table>
  );
};

export default TodoList;
