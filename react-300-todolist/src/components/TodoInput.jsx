import React from "react";

const TodoInput = ({ insert_todo }) => {
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      //? insert_todo 호출하며 입력된 todo
      insert_todo(e.target.value);
      e.target.value = "";
    }
  };
  return (
    <>
      <input
        className="w3-input w3-border w3-hover w3-lightgray"
        placeholder="TODO INPUT"
        onKeyDown={onKeyDown}
      />
    </>
  );
};

export default TodoInput;
