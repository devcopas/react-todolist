/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import * as styles from "./paper.styles";
import { useTheme } from "@emotion/react";

// import React from "react";
// import styles from "./paper.module.css";

const Paper = ({ children }) => {
  const theme = useTheme();

  return (
    // menggunakan css module
    // <div className={styles.container}>
    //   <div className={styles.frame}>{children}</div>
    // </div>

    // menggunakan css in js
    // <div css={styles.paper(theme)}>
    //   <div css={styles.frame(theme)}>{children}</div>
    // </div>

    // menggunakan layout container dan item
    <div css={styles.paper(theme)}>
      <div css={styles.frame(theme)}>{children}</div>
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default Paper;
