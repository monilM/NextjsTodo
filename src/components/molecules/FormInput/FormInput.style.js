import styled, { css } from 'styled-components';

const FormInputStyles = css`
  position: relative;
  &.borderRed input {
    border: 1px solid ${(props) => props.theme.colors.statusError} !important;
  }
  ${(props) => `
    margin-bottom: 20px;
    font-family: ${props.theme.typography.FONT_FAMILIES.CAIRO};
  `}
  .optional {
    ${(props) => `
      color: ${props.theme.colors.primaryGrey};
      font-size: ${props.theme.typography.FONT_SIZES.largeLabel};
      font-weight: ${props.theme.typography.FONT_WEIGHTS.semiBold};
      letter-spacing: 0px;
      line-height: ${props.theme.typography.LINE_HEIGHT.label};
      float:right;
    `};
  }
  .disabledInfo {
    position: absolute;
    top: 31px;
    right: 0;
    border-left: 1px solid
      ${(props) => props.theme.colors.primaryGrey};
    padding: 13px;
    color: ${(props) => props.theme.colors.primaryGrey};
  }
`;
export const LabelWrapper = styled.div`
  display: flex;
  line-height: 20px;
  margin-bottom: 10px;
  margin-top: 0px;
  .optional, .right {
    margin-left: auto;
  }
`;
export default FormInputStyles;
