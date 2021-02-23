import { Link } from "react-router-dom";
import { jsx, useTheme } from "@emotion/react";
import * as styles from "./content.styles";

import Container from "../../layout/ContainerClass";
import Item from "../../layout/ItemClass";

const Content = () => {
  const theme = useTheme();

  return jsx(
    "section",
    { className: "about-todo-component" },
    jsx(
      Container,
      {
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
      },
      jsx(
        Item,
        { padding: "0 1rem", align: "center" },
        jsx("h1", { css: styles.header(theme) }, "About this app"),
        jsx(
          "h3",
          { css: styles.subHeader(theme) },
          "What i learn by building this app"
        )
      ),
      jsx(
        Item,
        {
          padding: "0 2rem",
          flex: "1"
        },
        jsx(
          "span",
          { css: styles.paragraph(theme) },
          jsx(
            "p",
            null,
            "By building this app i have learned React from the ground up. I know more about components, props, function, class, emotion css, styling in react, CSS in JS, React Router .... and many more!"
          ),
          jsx(
            "p",
            null,
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque neque dignissimos rem natus nemo. Blanditiis,officiis doloremque voluptate quae dolorem iusto recusandae fugit tenetur cum nihil impedit dolor atque ipsam illo autem soluta possimus pariatur a consequuntur? Quia sapiente amet sint deleniti, aliquid nemo."
          )
        )
      ),
      jsx(
        Item,
        { padding: "0 1rem", align: "center" },
        jsx(
          "span",
          { css: styles.backToHome(theme) },
          jsx(Link, { to: "/" }, "Homepage")
        )
      )
    )
  );
};

export default Content;
