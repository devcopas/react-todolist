/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import * as styles from "./todos.styles";

import PropTypes from "prop-types";
// import Todo from "../todo/Todo";
import Todo from "../todo/TodoClass";
import Container from "../../layout/Container";

import React from "react";
// import styles from "./todos.module.css";
import { Link } from "react-router-dom";

const Todos = ({ todos, completeTodo }) => {
  const theme = useTheme();

  return (
    <section className="todos-component">
      <Container flexDirection="column" minHeight="500px">
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
          <React.Fragment>
            <div css={styles.todosPlaceholder(theme)}>
              <p>"No todos available"</p>
              <p>
                Add todo by clicking{" "}
                <span css={styles.highlightText(theme)}>Add</span> button on the
                top left corner.
              </p>
            </div>
            <div css={styles.seeAboutPage(theme)}>
              <span>
                Or visit <Link to="/about">About</Link> page
              </span>
            </div>
          </React.Fragment>
        )}
      </Container>
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
