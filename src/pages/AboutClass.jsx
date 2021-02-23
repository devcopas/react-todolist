import React from "react";

import Paper from "../components/paper/PaperClass";
import Container from "../layout/ContainerClass";
import Content from "../components/aboutContent/ContentClass";

class About extends React.Component {
  render() {
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
  }
}

export default About;
