import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos">
      {todos.map((t, i) => {
        return (
          <Todo
          key={i}
          text={t.text}
          completeTodo={completeTodo}
          index={i}
          isCompleted={t.isCompleted}
          />
        );
      })}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
