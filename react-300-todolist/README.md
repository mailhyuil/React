# REACT PROJECT(TODO)

## Components 구조

- TodoMain 이 TodoInput 과 todoList를 감싸고 있고
- TodoInput과 TodoList는 같은 level에 있다

## 데이터 흐름 정의

- TodoInput에서 데이터를 입력하고 추가를 하면 todoList 배열에 추가하고
- todoList 배열은 TodoList에서 표출한다
- TodoInput과 TodoList가 Parents-child관계에 있다면 TodoInput에서
  todoList State에 값을 추가하면 자연히 todolist에 변경된 값이 표출될
  것이다 하지만 2개의 component가 같은 level에 있기 때문에 todoinput에서
  todolist state를 정의하면 데이터를 공유하는데 어려움이 있다.
