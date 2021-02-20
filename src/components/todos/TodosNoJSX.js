/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import * as styles from "./todos.styles";

import Container from "../../layout/ContainerNoJSX";
import Todo from "../todo/TodoNoJSX";

const Todos = ({ todos, completeTodo }) => {
  const theme = useTheme();

  const todosElement = todos.map((todo, index) => {
    return jsx(Todo, {
      key: index,
      text: todo.text,
      completeTodo: completeTodo,
      index: index,
      isCompleted: todo.isCompleted
    });
  });

  const placeholderElement = jsx(
    React.Fragment,
    null,
    jsx(
      "div",
      {
        css: styles.todosPlaceholder(theme)
      },
      jsx("p", null, "No Todos Available"),
      jsx(
        "p",
        null,
        "Add todo by clicking",
        " ",
        jsx("span", { css: styles.highlightText(theme) }, "Add"),
        " ",
        "button on the top left corner"
      )
    ),
    jsx(
      "div",
      { css: styles.seeAboutPage(theme) },
      jsx(
        "span",
        null,
        "Or visit",
        " ",
        jsx(Link, { to: "/about" }, "About"),
        " ",
        "page"
      )
    )
  );

  return jsx(
    "section",
    { className: "todos-component" },
    jsx(
      Container,
      { flexDirection: "column", minHeight: "500px" },
      todos.length > 0 ? todosElement : placeholderElement
    )
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
