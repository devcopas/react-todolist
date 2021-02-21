/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";

import Paper from "../components/paper/PaperNoJSX";
import Container from "../layout/ContainerNoJSX";
import Content from "../components/aboutContent/Content";

const About = () => {
  return jsx(
    Paper,
    null,
    jsx(
      Container,
      {
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
      },
      jsx(Content)
    )
  );
};

export default About;
