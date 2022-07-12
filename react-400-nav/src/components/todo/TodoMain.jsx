import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import uuid from "react-uuid";
import moment from "moment";

//TODO TODO APP 만들기!
const TodoMain = () => {
  const func = (a, b) => {
    return a + b;
  };
  func(1, 2);

  const [todoList, setTodoList] = useState([]);

  const insert_todo = (content) => {
    //* 여기는 TodoInput이 전달해준 todo를 todoList에 추가하는 곳
    const todo = {
      id: uuid(),
      content,
      s_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
      e_date: "",
    };
    todo.content = content;

    setTodoList([todo, ...todoList]);
    console.log(todoList);
  };

  return (
    <div className="w3-container w3-margin">
      <TodoInput insert_todo={insert_todo} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default TodoMain;
