import React from "react";
import PropTypes from "prop-types";
import styles from "./todo.module.css";


const Todo = ({ text, completeTodo, index, isCompleted }) => {
  return (
    <div className={styles.todo} onClick={() => completeTodo(index)}>
      <span
        className={styles.todoText}
        style={{
          textDecoration: isCompleted ? "line-through" : "initial",
          fontStyle: isCompleted ? "italic" : "initial",
          color: isCompleted ? "rgb(159,165,177)" : "#fff"
        }}
      >
        {text}
      </span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired
};

export default Todo;
