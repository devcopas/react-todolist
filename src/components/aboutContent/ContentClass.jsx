import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";

import Container from "../../layout/ContainerClass";
import Item from "../../layout/ItemClass";

class Content extends React.Component {
  render() {
    return (
      <section className="about-content-component">
        <Container
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Item padding="0 1rem" align="center">
            <StyledH1>About this App</StyledH1>
            <StyledH3>What i learn by building this app</StyledH3>
          </Item>
          <Item padding="0 2rem" flex="1">
            <StyledSpan>
              <p>
                By building this app i have learned React from the ground up. I
                know more about components, props, function, class, emotion css,
                styling in react, CSS in JS, React Router .... and many more!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque neque dignissimos rem natus nemo. Blanditiis,
                officiis doloremque voluptate quae dolorem iusto recusandae
                fugit tenetur cum nihil impedit dolor atque ipsam illo autem
                soluta possimus pariatur a consequuntur? Quia sapiente amet sint
                deleniti, aliquid nemo.
              </p>
            </StyledSpan>
          </Item>
          <Item padding="0 1rem" align="center">
            <StyledBackToHome>
              Back to <Link to="/">Homepage</Link>
            </StyledBackToHome>
          </Item>
        </Container>
      </section>
    );
  }
}

const StyledH1 = styled.h1`
  color: ${(props) => props.theme.color.primary.base};
  font-size: 2rem;
  font-family: "Bungee", sans-serif;
  letter-spacing: 1px;
`;

const StyledH3 = styled.h3`
  color: ${(props) => props.theme.color.primary.setLightness(40)};
  font-size: 1.5rem;
  letter-spacing: 0.5px;
`;

const StyledSpan = styled.span`
  color: ${(props) => props.theme.color.light.darker};
  font-size: 1.6rem;
  text-align: justify;
  font-weight: 300;
  line-height: 2;
  text-indent: 4rem;
`;

const StyledBackToHome = styled.span`
  color: ${(props) => props.theme.color.light.darker};
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  font-weight: 500;

  > :first-of-type {
    color: ${(props) => props.theme.color.primary.base};
    text-decoration: unset;

    &:hover {
      color: ${(props) => props.theme.color.primary.darker};
      text-decoration: underline;
    }
  }
`;

export default withTheme(Content);
