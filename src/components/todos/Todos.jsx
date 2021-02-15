/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import * as styles from "./todos.styles";

import PropTypes from "prop-types";
import Todo from "../todo/Todo";
import Container from "../../layout/Container";

// import React from "react";
// import styles from "./todos.module.css";

const Todos = ({ todos, completeTodo }) => {
  const theme = useTheme();

  return (
    // <section className={styles.todos}>
    //   {todos.length > 0 &&
    //     todos.map((t, i) => {
    //       return (
    //         <Todo
    //           key={i}
    //           text={t.text}
    //           completeTodo={completeTodo}
    //           index={i}
    //           isCompleted={t.isCompleted}
    //         />
    //       );
    //     })}
    //   {todos.length === 0 && (
    //     <div className={styles.todosPlaceholder}>
    //       <p>"No todos available"</p>
    //       <p>
    //         Add todo by clicking{" "}
    //         <span className={styles.todosPlaceholderHighlightText}>Add</span>{" "}
    //         button on the top left corner.
    //       </p>
    //     </div>
    //   )}
    // </section>

    // <section css={styles.todos}>
    //   {todos.length > 0 &&
    //     todos.map((t, i) => {
    //       return (
    //         <Todo
    //           key={i}
    //           text={t.text}
    //           completeTodo={completeTodo}
    //           index={i}
    //           isCompleted={t.isCompleted}
    //         />
    //       );
    //     })}
    //   {todos.length === 0 && (
    //     <div css={styles.todosPlaceholder(theme)}>
    //       <p>"No todos available"</p>
    //       <p>
    //         Add todo by clicking{" "}
    //         <span css={styles.highlightText(theme)}>Add</span> button on the top
    //         left corner.
    //       </p>
    //     </div>
    //   )}
    // </section>

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
          <div css={styles.todosPlaceholder(theme)}>
            <p>"No todos available"</p>
            <p>
              Add todo by clicking{" "}
              <span css={styles.highlightText(theme)}>Add</span> button on the
              top left corner.
            </p>
          </div>
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
