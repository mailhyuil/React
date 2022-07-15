import "./App.css";
import TodoMain from "./components/TodoMain";
import "./w3css.css";
import Context from "./context/Context";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState(() => {
    const todoBody = JSON.parse(localStorage.getItem("TODOLIST"));
    if (todoBody) return todoBody;
    else return [];
  });

  const todo_delete = (id) => {
    const todoRemovedList = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(todoRemovedList);
  }; // todo_delete

  const todo_complete = (id) => {
    const todoBody = todoList.map((todo) => {
      if (todo.id === id) {
        let done = !todo.isDone
        return { ...todo, isDone: done };
      }
      return todo;
    });
    setTodoList(todoBody);
  }; // todo_complete

  const props = {
    todoList,
    setTodoList,
    todo_delete,
    todo_complete,
  };

  return (
    <div className="App">
      <header><h1>오늘 할일😊</h1></header>
      <Context.Provider value={props}>
        <TodoMain />
      </Context.Provider>
    </div>
  );
}

export default App;
