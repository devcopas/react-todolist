/** @jsxRuntime classic */
/** @jsx jsx*/
import { jsx, useTheme } from "@emotion/react";
import PropTypes from "prop-types";
import * as styles from "../header/header.styles";

import Button from "../button/ButtonNoJSX";
import Container from "../../layout/ContainerNoJSX";
import Item from "../../layout/ItemNoJSX";

const Header = ({ showAdd, showAddToggle, clearTodos }) => {
  const theme = useTheme();

  return jsx(
    "section",
    { className: "header-component" },
    jsx(
      Container,
      { alignItems: "flex-start" },
      jsx(
        Item,
        { flex: "1", padding: "1rem" },
        jsx(Button, {
          text: showAdd ? "Close" : "Add",
          onClick: showAddToggle
        })
      ),
      jsx(
        Item,
        { flex: "2" },
        jsx("h1", { css: styles.headerTitle(theme) }, "Todo List")
      ),
      jsx(
        Item,
        { flex: "1", padding: "1rem", align: "right" },
        jsx(Button, { text: "Clear", color: "red", onClick: clearTodos })
      )
    )
  );
};

Header.propTypes = {
  showAdd: PropTypes.bool.isRequired,
  showAddToggle: PropTypes.func.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
