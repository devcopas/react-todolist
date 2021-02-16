/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useTheme } from "@emotion/react";
import PropTypes from "prop-types";
// import Button from "../button/Button";
import Button from "../button/ButtonClass";
// import Button from "../button/ButtonNoJSX";

import * as styles from "./header.styles";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return (
    <section className="header-component">
      <Container alignItems="flex-start">
        <Item flex="1" padding="1rem">
          <Button text={showAdd ? "Close" : "Add"} onClick={showAddToggle} />
        </Item>
        <Item flex="2">
          <h1 css={styles.headerTitle(theme)}>Todo List</h1>
        </Item>
        <Item flex="1" padding="1rem" align="right">
          <Button text="Clear" color="red" onClick={clearTodos} />
        </Item>
      </Container>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
