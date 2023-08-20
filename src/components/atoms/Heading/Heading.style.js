import { css } from "styled-components";

const cssRules = (props, size) => {
  let headingLevel = `${size}${props.type.toUpperCase()}`;
  // if (props.appearAs) {
  //   headingLevel = `${size}${props.appearAs.toUpperCase()}`;
  // }
  return `
    font-size: ${props.theme.typography.FONT_SIZES[headingLevel]};
    font-weight: ${props.theme.typography.FONT_WEIGHTS.bold};
    line-height: ${props.theme.typography.LINE_HEIGHT[headingLevel]};
    text-align: ${props.align || "left"};
    color: ${props.theme.colors.greyscaleJetblack};
    font-family: ${props.theme.typography.FONT_FAMILIES.CAIRO};
    `;
};

const styles = css`
  ${(props) => cssRules(props, "small")}
  ${(props) => props.theme.breakpoints.sm} {
    ${(props) => cssRules(props, "medium")}
  }
  ${(props) => props.theme.breakpoints.xl} {
    ${(props) => cssRules(props, "large")}
  }
`;

export default styles;
