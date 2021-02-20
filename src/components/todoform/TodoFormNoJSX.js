/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import PropTypes from "prop-types";
import * as styles from "./todoform.styles";

import React from "react";
import Button from "../button/ButtonNoJSX";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = React.useState("");
  const theme = useTheme();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("can't be blank, type something!");
      return;
    }

    if (value.length > 50) {
      alert("text cannot be longer than 50 characters");
      return;
    }

    addTodo(value);
    setValue("");
  };

  const form = jsx(
    "section",
    { className: "todoform-component" },
    jsx(
      "form",
      { onSubmit: handleFormSubmit },
      jsx(
        Container,
        {
          alignItems: "flex-end"
        },
        jsx(
          Item,
          { flex: "1", padding: "0 15px" },
          jsx("input", {
            type: "text",
            css: styles.addInput(theme),
            value: value,
            autoFocus: true,
            onChange: (e) => setValue(e.target.value)
          })
        ),
        jsx(
          Item,
          {
            padding: "0 15px"
          },
          jsx(Button, {
            text: "Save"
          })
        )
      )
    )
  );

  return showAdd ? form : null;
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
