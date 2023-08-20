// @flow
import React from "react";
import type, { Node } from "react";
import P from "./Paragraph.style";

// type Props = {
//   children: Node,
//   align?: "left" | "center" | "right",
//   size?: "small" | "regular" | "medium",
//   className?: string,
//   useSize?: Boolean,
// };

const Paragraph = ({ children, className = "", align, ...others }) => (
  <P
    className={others.error ? `${className} error` : className}
    align={align}
    {...others}
  >
    {children}
  </P>
);

Paragraph.defaultProps = {
  size: "regular",
};

export default Paragraph;
