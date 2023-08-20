// @flow
import React from "react";
import type, { Node, ComponentType } from "react";
import styled from "styled-components";
import styles from "./Heading.style";

// type Props = {
//   type: "h1" | "h2" | "h3" | "h4" | "h5",
//   appearAs: "h1" | "h2" | "h3" | "h4" | "h5",
//   align: "left" | "center" | "right",
//   className: string,
// };

const Heading = ({
  children,
  className = "",
  type = "h1",
  align = "left",
  ...others
}) => {
  const HeadingType = type;
  return (
    <HeadingType {...others} className={className}>
      {children}
    </HeadingType>
  );
};

Heading.defaultProps = {
  type: "h1",
  appearAs: null,
};

const StyledHeading = styled(Heading)`
  ${styles};
`;

export default StyledHeading;
export { Heading as HeadingVanilla };
