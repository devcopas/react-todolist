import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map((t) => {
        return <Todo text={t.text} />;
      })}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  )
};

export default Todos;
