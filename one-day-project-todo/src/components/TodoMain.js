import React, { useState, useEffect, useContext } from "react";
import Context from "../context/Context";
import uuid from "react-uuid";
import TodoList from "./TodoList";

const TodoMain = () => {
  const { todoList, setTodoList } = useContext(Context);
  useEffect(() => {
    localStorage.setItem("TODOLIST", JSON.stringify(todoList));
  }, [todoList]);

  // 버킷을 입력한 후 버킷을 추가할 때
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const todo = {
        id: uuid(), // PK 생성
        todo: e.target.value,
        isDone: false,
      };
      setTodoList([...todoList, todo]);
      e.target.value = "";
      console.log(todoList);
    }
  }; // onKeyDown

  return (
    <div>
      <input
        onKeyDown={onKeyDown}
        className="w3-input w3-border w3-hover-tray w3-round"
        placeholder="버킷에 추가할 내용을 입력해주세요"
      />
      <div>
        <TodoList />
      </div>
    </div>
  );
};

export default TodoMain;
