import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import Container from "../../layout/Container";
import Todo from "../todo/TodoClass";

class Todos extends React.Component {
  todosElement = () => {
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

  placeholderElement = () => (
    <StyledPlaceHolder>
      <p>"No todos available"</p>
      <p>
        Add todo by clicking
        <StyledPlaceHolderText> Add </StyledPlaceHolderText>
        button on the top left corner
      </p>
    </StyledPlaceHolder>
  );

  render() {
    const {
      todosElement: todos,
      placeholderElement: placeholder,
      props: { todos: todoList }
    } = this;

    return (
      <section className="todos-component">
        <Container flexDirection="column" minHeight="500px">
          {todoList.length > 0 ? todos() : placeholder()}
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

const StyledPlaceHolder = styled.div`
  color: ${(props) => props.theme.color.light.base};
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 1rem 10rem;
`;

const StyledPlaceHolderText = styled.span`
  font-family: "Bungee", sans-serif;
  color: ${(props) => props.theme.color.primary.base};
`;

export default withTheme(Todos);
