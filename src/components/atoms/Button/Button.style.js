import { css } from "styled-components";

const width = {
  sm: "116px",
  md: "140px",
  lg: "190px",
  xl: "280px",
  full: "100%",
};

const ButtonStyles = css`
  ${(props) => `
    font-family: ${props.theme.typography.FONT_FAMILIES.CAIRO};
    color: ${props.theme.colors.greyscaleWhite};
    border-radius: ${props.theme.borders.fieldBorderRadius};
    text-align: center;
    font-size: ${props.theme.typography.FONT_SIZES.button};
    font-weight: ${props.theme.typography.FONT_WEIGHTS.regular};
    letter-spacing: 0px;
    line-height: 20px;
    cursor: ${props.disabled ? "not-allowed" : "pointer"};
    border: 1px solid ${props.theme.colors.primary};
    min-height: 45px;
    min-width: ${width.md};
    width: ${width[props.size]};
  `}

  /* type specific CSS rules */
  ${(props) => {
    switch (props.variation) {
      case "gold":
        return `
          background-color: ${props.theme.colors.primary};
          :hover{
              background-color : ${props.theme.colors.secondary};
              border-color: ${props.theme.colors.secondary}
          }
        `;
      case "black":
        return `
          background-color: ${props.theme.colors.greyscaleJetblack};
          border-color: ${props.theme.colors.greyscaleJetblack};
          :hover{
              background-color : ${props.theme.colors.primaryGreyDark};
              border-color: ${props.theme.colors.primaryGreyDark};
           }
        `;
      case "ghost":
        return `
          background-color: transparent;
          border-color: ${props.theme.colors.primaryDarkGrey};
          color: ${props.theme.colors.greyscaleJetblack};
          :hover{
            border-color : ${props.theme.colors.greyscaleJetblack}
          }
        `;
      case "ghostWithBg":
        return `
          border-color: ${props.theme.colors.greyscaleWhite};
          background-color:transparent;
        `;
      case "iconBtn":
        return `
          padding: 0 2px;
          background-color: transparent;
          color: ${props.theme.colors.greyscaleJetblack};
          border:0;
          width: auto;
          min-width: auto;
        `;
      case "asLink":
        return `
          appearance: none;
          text-decoration: underline;
          background: none;
          border: none;
          min-width: fit-content;
          min-height: fit-content;
          width: fit-content;
          color: ${props.theme.colors.primary};
          &:hover {
            cursor: pointer;
          }
        `;
      case "asBlackLink":
        return `
          appearance: none;
          text-decoration: underline;
          background: none;
          border: none;
          color: ${props.theme.colors.greyscaleJetblack};
          &:hover {
            cursor: pointer;
          }
        `;
      default:
        return "";
    }
  }};

  /* disabled specific CSS rules */
  ${(props) => {
    if (props.disabled) {
      return `
          background-color: ${props.theme.colors.greyscaleFlashgrey};
          border-color: ${props.theme.colors.greyscaleFlashgrey};
          color: ${props.theme.colors.greyscaleJetblack};

          :hover{
            background-color: ${props.theme.colors.greyscaleFlashgrey};
            border-color: ${props.theme.colors.greyscaleFlashgrey};
            color: ${props.theme.colors.greyscaleJetblack};
          }
        `;
    }
    return "";
  }};
`;

export default ButtonStyles;
