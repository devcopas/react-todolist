/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import * as styles from "../aboutContent/content.styles";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

const Content = () => {
  const theme = useTheme();
  return (
    <section className="about-content-component">
      <Container
        flexDirection="column"
        height="100%"
        justifyContent="space-between"
      >
        <Item padding="0 1rem" align="center">
          <h1 css={styles.header(theme)}>About this App</h1>
          <h3 css={styles.subHeader(theme)}>
            What i learn by building this app
          </h3>
        </Item>
        <Item padding="0 2rem" flex="1">
          <span css={styles.paragraph(theme)}>
            <p>
              By building this app i have learned React from the ground up. I
              know more about components, props, function, class, emotion css,
              styling in react, CSS in JS, React Router .... and many more!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque neque dignissimos rem natus nemo. Blanditiis, officiis
              doloremque voluptate quae dolorem iusto recusandae fugit tenetur
              cum nihil impedit dolor atque ipsam illo autem soluta possimus
              pariatur a consequuntur? Quia sapiente amet sint deleniti, aliquid
              nemo.
            </p>
          </span>
        </Item>
        <Item align="center" padding="0 1rem">
          <span css={styles.backToHome(theme)}>
            Back to <Link to="/">Homepage</Link>
          </span>
        </Item>
      </Container>
    </section>
  );
};

export default Content;
