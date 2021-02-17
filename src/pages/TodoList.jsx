import React, { useState } from "react";
// import Paper from "../components/paper/Paper";
import Paper from "../components/paper/PaperClass";
// import Header from "../components/header/Header";
import Header from "../components/header/HeaderClass";
// import Header from "../components/header/HeaderNoJSX";
import TodoForm from "../components/todoform/TodoForm";
import Todos from "../components/todos/Todos";
import Container from "../layout/Container";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Belajar react!", isCompleted: false },
    { text: "Belajar hooks", isCompleted: false },
    { text: "Belajar component", isCompleted: false }
  ]);

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
