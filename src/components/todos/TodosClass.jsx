import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import { Link } from "react-router-dom";

import Container from "../../layout/ContainerClass";
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

  placeholder = (
    <>
      <StyledPlaceholder>
        <p>No Todos Available</p>
        <p>
          Add todo by clicking <StyledHighlightText>Add</StyledHighlightText>{" "}
          button on the top left corner
        </p>
      </StyledPlaceholder>
      <StyledVisitAboutPage>
        <span>
          or visit <Link to="/about">About</Link> page{" "}
        </span>
      </StyledVisitAboutPage>
    </>
  );

  render() {
    const {
      showTodos,
      placeholder,
      props: { todos }
    } = this;

    return (
      <section className="todos-component">
        <Container flexDirection="column" minHeight="500px">
          {todos.length > 0 ? showTodos() : placeholder}
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

const StyledVisitAboutPage = styled.div`
  font-family: "Open Sans", sans-serif;
  color: ${(props) => props.theme.color.light.setLightness(80, 0.5)};
  font-size: 1.6rem;
  text-align: center;

  > span > :first-of-type {
    letter-spacing: 1px;
    font-weight: 700;
    color: red;
    text-decoration: none;
    color: ${(props) => props.theme.color.primary.base};

    &:hover {
      color: ${(props) => props.theme.color.primary.darker};
      text-decoration: underline;
    }
  }
`;

export default withTheme(Todos);
