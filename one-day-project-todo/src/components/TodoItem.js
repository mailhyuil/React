import React from "react";
import { useContext } from "react";
import Context from "../context/Context";

const TodoItem = ({ item }) => {
  const { todo_delete, todo_complete } = useContext(Context);

  return (
    <tr className={item.isDone === false ? "xmark" : "cancel xmark"}>
      <td className=""
        onClick={() => {
          todo_delete(item.id);
        }}
      >
        <i className="fas fa-xmark" />
      </td>

      <td className="todo">{item.todo}</td>

      <td className="check"
        onClick={() => {
          todo_complete(item.id);
        }}
      >
        <i className="fas fa-check" />
      </td>
    </tr>
  );
};

export default TodoItem;
