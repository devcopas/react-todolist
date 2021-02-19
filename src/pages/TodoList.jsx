import React, { useState } from "react";
// import React, { useState, useEffect } from "react";

// import Header from "../components/header/HeaderNoJSX";

import Paper from "../components/paper/Paper";
import Header from "../components/header/Header";
import TodoForm from "../components/todoform/TodoForm";
import Todos from "../components/todos/Todos";

// import Paper from "../components/paper/PaperClass";
// import Header from "../components/header/HeaderClass";
// import TodoForm from "../components/todoform/TodoFormClass";
// import Todos from "../components/todos/TodosClass";

import Container from "../layout/Container";
import useStateWithLocalStorage from "../hooks/useStateWithLocalStorage";

const TodoList = () => {
  //   const [todos, setTodos] = useState(
  //     JSON.parse(localStorage.getItem("todos")) || []
  //   );

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  const [todos, setTodos] = useStateWithLocalStorage("todos");

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = (value) => {
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];
      setTodos(addedTodo);
    } else {
      alert("Cannot add new todo, Only 10 todos are allowed!");
    }
  };

  const clearTodos = () => !showAdd && setTodos([]);

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    setTodos(addedTodo);
  };

  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Header
          showAddToggle={showAddToggle}
          showAdd={showAdd}
          clearTodos={clearTodos}
        />
        <TodoForm addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
      </Container>
    </Paper>
  );
};

export default TodoList;
