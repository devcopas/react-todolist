/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import * as styles from "./todoform.styles";
import PropTypes from "prop-types";
import React from "react";
// import React, { useState } from "react";
// import styles from "./todoform.module.css";

import Button from "../button/Button";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

const TodoForm = ({ addTodo, showAdd }) => {
  // const [value, setValue] = useState("");
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

  if (showAdd) {
    return (
      <section className="todoform-component">
        <form onSubmit={handleFormSubmit}>
          <Container alignItems="flex-end">
            <Item flex="1" padding="0 15px">
              <input
                type="text"
                css={styles.addInput(theme)}
                value={value}
                autoFocus={true}
                onChange={(e) => setValue(e.target.value)}
              />
            </Item>
            <Item padding="0 15px">
              <Button text="Save" color={"custom"} />
              {/* <button css={styles.addBtn(theme)}>Save</button> */}
            </Item>
          </Container>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
