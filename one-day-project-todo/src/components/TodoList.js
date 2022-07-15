import React from "react";
import { useContext } from "react";
import Context from "../context/Context";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoList } = useContext(Context);

  const todoBody = todoList.map((todo) => {
    return <TodoItem key={todo.id} item={todo} />;
  });

  return (
    <table className="w3-table w3-table-all">
      <tbody>{todoBody}</tbody>
    </table>
  );
};

export default TodoList;
