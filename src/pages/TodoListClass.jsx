import React from "react";

import Paper from "../components/paper/PaperClass";
import Header from "../components/header/HeaderClass";
import TodoForm from "../components/todoform/TodoFormClass";
import Todos from "../components/todos/TodosClass";
import Container from "../layout/ContainerClass";

class TodoList extends React.Component {
  state = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    showAdd: JSON.parse(localStorage.getItem("showAdd")) || false
  };

  // use Effect
  componentDidMount() {
    const { todos, showAdd } = this.state;
    const todosStateLocalStorage = todos;
    const showAddStateLocalStorage = showAdd;

    todos !== todosStateLocalStorage &&
      this.setState({ todos: todosStateLocalStorage });

    showAdd !== showAddStateLocalStorage &&
      this.setState({ showAdd: showAddStateLocalStorage });
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos, showAdd } = this.state;

    if (todos !== prevState.todos)
      localStorage.setItem("todos", JSON.stringify(todos));

    if (showAdd !== prevState.showAdd)
      localStorage.setItem("showAdd", JSON.stringify(showAdd));
  }

  addTodo = (value) => {
    if (this.state.todos.length < 10) {
      const addedTodo = [
        ...this.state.todos,
        { text: value, isCompleted: false }
      ];
      this.setState({ todos: addedTodo });
    } else alert("Cannot add new todo, Only 10 todos are allowed!");
  };

  clearTodos = () =>
    !this.state.showAdd
      ? this.setState({ todos: [] })
      : alert("click close button before clear todos");

  completeTodo = (index) => {
    const addedTodo = [...this.state.todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    this.setState({ todos: addedTodo });
  };

  showAddToggle = () =>
    this.setState((prevState) => ({
      showAdd: !prevState.showAdd
    }));

  render() {
    const {
      addTodo,
      clearTodos,
      completeTodo,
      showAddToggle,
      state: { todos, showAdd }
    } = this;

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
  }
}

export default TodoList;
