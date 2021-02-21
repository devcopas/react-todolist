import React from "react";

import Paper from "../components/paper/Paper";
import Container from "../layout/Container";
import Content from "../components/aboutContent/Content";

const About = () => {
  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Content />
      </Container>
    </Paper>
  );
};

export default About;
