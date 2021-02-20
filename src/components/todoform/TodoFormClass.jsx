import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";

import Container from "../../layout/ContainerClass";
import Item from "../../layout/ItemClass";
import Button from "../button/ButtonClass";

class TodoForm extends React.Component {
  state = {
    value: ""
  };

  handleFormSubmit = (e) => {
    const { value } = this.state;
    const { addTodo } = this.props;

    e.preventDefault();

    if (!value) {
      alert("can't be blank, please type something!");
      return;
    }

    if (value.length > 50) {
      alert("text cannot be longer than 50 characters");
      return;
    }

    addTodo(value);
    this.setState({ value: "" });
  };

  handleOnChange = (e) => {
    this.setState({ value: e.target.value });
  };

  formElement = () => (
    <section className="todoform-component">
      <form onSubmit={this.handleFormSubmit}>
        <Container alignItems="flex-end">
          <Item flex="1" padding="0 15px">
            <StyledInput
              type="text"
              autoFocus={true}
              value={this.state.value}
              onChange={this.handleOnChange}
            />
          </Item>
          <Item padding="0 15px">
            <Button text="Save" />
          </Item>
        </Container>
      </form>
    </section>
  );

  render() {
    const { showAdd } = this.props;
    return showAdd ? this.formElement() : null;
  }

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
  };
}

// --Styling Component-- //
const StyledInput = styled.input`
  background: unset;
  border: unset;
  padding: 0 64px;
  outline: unset;
  color: ${(props) => props.theme.color.light.darker};
  font-family: "Open Sans", sans-serif;
  letter-spacing: 1px;
  font-size: 16px;
  text-align: center;
  width: 100%;
  border-bottom: 1px solid
    ${(props) => props.theme.color.primary.setLightness(20)};
`;

export default withTheme(TodoForm);
