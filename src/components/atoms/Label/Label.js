// @flow
import React from "react";
import type, { Node } from "react";
import { LabelWrapper } from "./Label.style";

// type Props = {
//   labelFor?: string,
//   children: Node,
//   id?: string,
//   className?: string,
//   size?: 'small' | 'regular' | 'large' | 'xlarge',
//   weight?: 'regular' | 'semiBold' | 'bold',
// };

const Label = ({
  labelFor,
  children,
  id,
  className,
  size,
  weight,
  ...others
}) => (
  <LabelWrapper
    htmlFor={labelFor}
    id={id}
    className={className}
    weight={weight}
    size={size}
    {...others}
  >
    {children}
  </LabelWrapper>
);

Label.defaultProps = {
  id: "",
  className: "",
  labelFor: "",
  size: "large",
  weight: "regular",
};

export default Label;
export { Label as LabelVanilla };
