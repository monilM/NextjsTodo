// @flow
import React from "react";
import styled from "styled-components";
import styles from "./Button.style";

// type Props = {
//   size?: 'md' | 'lg' | 'xl' | 'full',
//   disabled?: boolean,
//   variation?:
//     | 'gold'
//     | 'black'
//     | 'ghost'
//     | 'ghostWithBg'
//     | 'iconBtn'
//     | 'asLink',
//   children: string,
//   iconType: string,
//   className: string,
// };

const Button = ({
  size,
  disabled,
  variation,
  children,
  iconType,
  className,
  type,
  ...otherProps
}) => {
  console.log("Button", otherProps);
  const ariaLabelProp =
    variation === "iconBtn"
      ? { "aria-label": otherProps.label || "icon button" }
      : {};

  return (
    /* eslint-disable react/button-has-type */
    <button
      disabled={disabled}
      type={type || "button"}
      size={size}
      className={className}
      {...ariaLabelProp}
      {...otherProps}
    >
      {children}

      {iconType ? <span className={`icon ${iconType}`} /> : ""}
    </button>
  );
};

const StyledButton = styled(Button)`
  ${styles};
`;

StyledButton.defaultProps = {
  size: "lg",
  disabled: false,
  variation: "gold",
};
Button.defaultProps = { ...StyledButton.defaultProps };

export { Button as ButtonVanilla };
export default StyledButton;
