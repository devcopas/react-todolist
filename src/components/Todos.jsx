import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos">
      {todos.length > 0 &&
        todos.map((t, i) => {
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
      {todos.length === 0 && (
        <div className="todos-placeholder">
          <p>"No todos available"</p>
          <p>
            Add todo by clicking{" "}
            <span className="todos-placeholder-add">Add</span> button on the top
            left corner.
          </p>
        </div>
      )}
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
