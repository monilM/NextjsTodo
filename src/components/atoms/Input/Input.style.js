import styled from 'styled-components';
import { getBasePath } from '../../../routes';

export const StyledInput = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
  &[type='date'] {
    -webkit-appearance: none;
  }
  &[type='date']::-webkit-inner-spin-button {
    opacity: 0;
  }

  &[type='date']::-webkit-calendar-picker-indicator {
    background: url(${(props) =>
        props.portalDomain
          ? props.portalDomain +
            getBasePath('/static/images/calendar.svg')
          : getBasePath('/static/images/calendar.svg')})
      center/80% no-repeat;
    color: rgba(0, 0, 0, 0);
  }

  &[type='date']::-webkit-calendar-picker-indicator:hover {
    background: url(${(props) =>
        props.portalDomain
          ? props.portalDomain +
            getBasePath('/static/images/calendar.svg')
          : getBasePath('/static/images/calendar.svg')})
      center/80% no-repeat;
  }

  ${(props) => `
    border-radius: ${props.theme.borders.inputFieldBorderRadius};
    height: 45px;
    color: ${props.theme.colors.greyscaleJetblack};
    font-family: ${props.theme.typography.FONT_FAMILIES.CAIRO};
    font-size: ${props.theme.typography.FONT_SIZES.mediumBody};
    font-weight: ${props.theme.typography.FONT_WEIGHTS.semiBold};
    letter-spacing: 0px;
    line-height: ${props.theme.typography.LINE_HEIGHT.input};
    padding: ${props.iconType ? '0 40px 0 20px' : '0 20px'};
    border: 1px solid;
    outline: none;
    width:100%;
    box-sizing : border-box;
    &:hover, &:focus {
      border-color :${props.theme.colors.greyscaleJetblack};
    }

  `}

  ${(props) => {
    switch (props.inputState) {
      case 'success':
        return `
          border-color :${props.theme.colors.outlineGreen};
        `;
      case 'error':
        return `
        border-color :${props.theme.colors.outlineRed};
        `;
      case 'default':
        return `
          border-color :${props.theme.colors.primaryDarkGrey};
        `;
      default:
        return '';
    }
  }};

  ${(props) => {
    return props.inputDisabled
      ? `color :${props.theme.colors.greyscaleJetblack};`
      : '';
  }};

  /* disabled specific CSS rules */
  ${(props) =>
    props.disabled
      ? `
          background-color : ${props.theme.colors.greyscaleWhite};
          color: ${props.theme.colors.primaryGrey};
          &:hover, &:focus {
            border-color :${props.theme.colors.primaryDarkGrey};
          }
        `
      : ''};

  /* iconType specific CSS rules */
  ${(props) =>
    props.iconType || props.originalType === 'password'
      ? `
          padding-right: 50px;
        `
      : ''};
`;

export const InputWrapper = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  & .inputIcon {
    position: absolute;
    right: 20px;
  }
  .togglePassword {
    cursor: pointer;
    border: 0;
    background: transparent;
  }
  .calendarBtn {
    background: none;
    padding: 8px;
    border: 0;
    position: absolute;
    right: 12px;
    top: 6px;

    ${(props) =>
      props.disabled
        ? `
          background-color : ${props.theme.colors.greyscaleWhite};
          color: ${props.theme.colors.primaryGrey};
          &:hover, &:focus {
            border-color :${props.theme.colors.primaryDarkGrey};
          }
        `
        : ''};
  }
`;
