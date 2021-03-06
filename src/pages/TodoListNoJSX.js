/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useEffect } from "react";

import Paper from "../components/paper/PaperNoJSX";
import Header from "../components/header/HeaderNoJSX";
import TodoForm from "../components/todoform/TodoFormNoJSX";
import Todos from "../components/todos/TodosNoJSX";
import Container from "../layout/ContainerNoJSX";

const TodoList = () => {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [showAdd, setShowAdd] = React.useState(
    JSON.parse(localStorage.getItem("showAdd")) || false
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("showAdd", JSON.stringify(showAdd));
  }, [showAdd]);

  const addTodo = (value) => {
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];
      setTodos(addedTodo);
    } else {
      alert("Cannot add new todo, Only 10 todos are allowed!");
    }
  };

  async function clear() {
    setTodos([]);
    setTimeout(() => {
      alert("todos has been clear");
    }, 500);
  }

  const clearTodos = () =>
    !showAdd
      ? window.confirm("Are you sure you want to clear this todos?") && clear()
      : alert("Please click close button before clear todos");

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    setTodos(addedTodo);
  };

  const showAddToggle = () => setShowAdd(!showAdd);

  return jsx(
    Paper,
    {},
    jsx(
      Container,
      {
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
      },
      jsx(Header, {
        showAddToggle: showAddToggle,
        showAdd: showAdd,
        clearTodos: clearTodos
      }),
      jsx(TodoForm, { addTodo: addTodo, showAdd: showAdd }),
      jsx(Todos, { todos: todos, completeTodo: completeTodo })
    )
  );
};

export default TodoList;
