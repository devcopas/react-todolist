import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";

import Container from "../../layout/Container";
import Todo from "../todo/TodoClass";

class Todos extends React.Component {
  showTodos = () => {
    const { todos, completeTodo } = this.props;
    return todos.map((t, i) => (
      <Todo
        key={i}
        text={t.text}
        completeTodo={completeTodo}
        index={i}
        isCompleted={t.isCompleted}
      />
    ));
  };

  showPlaceholder = () => (
    <StyledPlaceholder>
      {[
        <p key="0">No Todos Available</p>,
        "Add todo by clicking",
        <StyledHighlightText key="1"> Add </StyledHighlightText>,
        "button on the top left corner."
      ]}
    </StyledPlaceholder>
  );

  render() {
    const {
      props: { todos }
    } = this;

    return (
      <section className="todos-component">
        <Container flexDirection="column" minHeight="500px">
          {todos.length > 0 ? this.showTodos() : this.showPlaceholder()}
        </Container>
      </section>
    );
  }

  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        isCompleted: PropTypes.bool
      })
    ),
    completeTodo: PropTypes.func.isRequired
  };
}

// --- Styling Component --- //
const StyledPlaceholder = styled.div`
  color: ${(props) => props.theme.color.light.base};
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 1rem 10rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${(props) => props.theme.color.light.setLightness(95, 0.5)};

  > p:first-of-type {
    margin: 0.5em 0;
    color: ${(props) => props.theme.color.light.setLightness(80, 0.5)};
  }
`;

const StyledHighlightText = styled.span`
  font-family: "Bungee", sans-serif;
  color: ${(props) => props.theme.color.primary.base};
`;

export default withTheme(Todos);
