import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";

import Container from "../../layout/Container";
import Item from "../../layout/Item";
import Button from "../button/ButtonClass";

const StyledH1 = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.color.light.base};
  font-size: 3.6rem;
  font-family: "Bungee", sans-serif;
  text-transform: lowercase;
  letter-spacing: 2px;
`;

class Header extends React.Component {
  render() {
    const { showAddToggle, showAdd, clearTodos } = this.props;
    return (
      <section className="header-component">
        <Container alignItems="flex-start">
          <Item flex="1" padding="1rem">
            <Button text={showAdd ? "Close" : "Add"} onClick={showAddToggle} />
          </Item>
          <Item flex="2">
            <StyledH1>Todo List</StyledH1>
          </Item>
          <Item flex="1" padding="1rem" align="right">
            <Button text="Clear" color="red" onClick={clearTodos} />
          </Item>
        </Container>
      </section>
    );
  }

  static propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodos: PropTypes.func.isRequired
  };
}

export default withTheme(Header);
