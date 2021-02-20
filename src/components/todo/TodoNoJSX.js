/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import PropTypes from "prop-types";
import * as styles from "./todo.styles";

const Todo = ({ text, completeTodo, index, isCompleted }) => {
  const theme = useTheme();

  return jsx(
    "div",
    {
      css: styles.todo(theme),
      onClick: () => completeTodo(index)
    },
    jsx("span", { css: styles.todoText({ theme, isCompleted }) }, text)
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired
};

export default Todo;
