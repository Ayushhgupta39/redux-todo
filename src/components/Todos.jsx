import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../store/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };
  console.log(todos);

  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <li
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          key={todo.id}
        >
          <div className="text-white">{todo.text}</div>
          <button onClick={deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}

export default Todos;
