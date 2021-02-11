//---- jika menggunakan css in js ----//
// jika menggunakan classic js runtime//
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
// jika menggunakan classic js runtime //

// jika menggunakan automatic js runtime //
// /** (@)jsxImportSource @emotion/react */
// jika menggunakan automatic js runtime //

import PropTypes from "prop-types";
import Button from "../button/Button";
import * as styles from "./header.styles";
//---- ------------------------- ----//

//---- jika menggunakan css module ----//
// import React from "react";
// import PropTypes from "prop-types";
// import Button from "../button/Button";
// import styles from "./header.module.css";
//---- -------------------------- ----//

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    //---- jika menggunakan css module ----//
    // <section className={styles.header}>
    //   <Button text={showAdd ? "Close" : "Add"} onClick={showAddToggle} />
    //   <h1 className={styles.headerTitle}>Todo List</h1>
    //   <Button text="Clear" color="red" onClick={clearTodos} />
    // </section>
    //---- jika menggunakan css module ----//

    //---- jika menggunakan css in js ----//
    <section css={styles.header}>
      <Button text={showAdd ? "Close" : "Add"} onClick={showAddToggle} />
      <h1 css={styles.headerTitle}>Todo List</h1>
      <Button text="Clear" color="red" onClick={clearTodos} />
    </section>
    //---- jika menggunakan css in js ----//
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
