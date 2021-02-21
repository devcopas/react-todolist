import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { withTheme, css } from "@emotion/react";

class Todo extends React.Component {
  render() {
    const { text, completeTodo, index, isCompleted } = this.props;

    return (
      <StyledTodo onClick={() => completeTodo(index)}>
        <StyledTodoText complete={isCompleted}>{text}</StyledTodoText>
      </StyledTodo>
    );
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    completeTodo: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired
  };
}

// --Component Styling-- //
const StyledTodo = styled.div`
  position: relative;
  flex: 1 0 auto;
  text-align: center;
  max-height: 50px;
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
  cursor: pointer;
  border-bottom: 1px solid
    ${(props) => props.theme.color.primary.setLightness(20, 0.2)};

  &:hover {
    background-color: ${(props) => props.theme.color.dark.setLightness(20)};
  }
`;

const StyledTodoText = styled.span`
  /* width: 100%; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.color.light.base};
  letter-spacing: 1px;

  ${(props) =>
    props.complete &&
    css`
      text-decoration: line-through;
      font-style: italic;
      color: ${props.theme.color.light.setLightness(40)};
    `}
`;

export default withTheme(Todo);
