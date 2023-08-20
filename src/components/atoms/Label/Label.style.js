import styled from "styled-components";

export const LabelWrapper = styled.label`
  ${(props) => `
  color: ${
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.greyscaleJetblack
  };
  font-family: ${props.theme.typography.FONT_FAMILIES.CAIRO};
  font-weight: ${props.theme.typography.FONT_WEIGHTS[props.weight]};
  letter-spacing: 0px;
  line-height: ${props.theme.typography.LINE_HEIGHT.label};

  ${props.disabled ? `color: ${props.theme.colors.primaryGrey};` : ``}
  `};

  ${(props) => {
    switch (props.size) {
      case "small":
        return `font-size: ${props.theme.typography.FONT_SIZES.smallLabel};`;
      case "large":
        return `font-size: ${props.theme.typography.FONT_SIZES.largeLabel};`;
      case "xlarge":
        return `font-size: ${props.theme.typography.FONT_SIZES.xlargeLabel};`;
      default:
        return `font-size: ${props.theme.typography.FONT_SIZES.regularLabel};`;
    }
  }};
`;
