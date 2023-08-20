import styled from 'styled-components';

const P = styled.p`
  color: ${(props) => props.error && props.theme.colors.outlineRed};
  margin: ${(props) => props.error && '10px 0 0 0'};
  font-weight: ${(props) =>
    props.theme.typography.FONT_WEIGHTS[
      props.bold ? 'bold' : 'regular'
    ]};
  font-family: ${(props) =>
    props.theme.typography.FONT_FAMILIES.CAIRO};
  text-align: ${(props) => props.align || 'initial'};
  ${(props) => {
    const bodyToLookup = `${props.size}Body`;

    return `
      font-size: ${
        props.useSize
          ? props.theme.typography.FONT_SIZES[bodyToLookup]
          : props.error
          ? props.theme.typography.FONT_SIZES.smallBody
          : props.theme.typography.FONT_SIZES[bodyToLookup]
      };
      line-height: ${
        props.error
          ? '15px'
          : props.theme.typography.LINE_HEIGHT[bodyToLookup]
      };
    `;
  }};
`;

export default P;
