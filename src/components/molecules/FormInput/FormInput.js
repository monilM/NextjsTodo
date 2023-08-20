// @flow
import React from "react";
import styled from "styled-components";
import Input from "../../atoms/Input";
// import Textarea from "../../atoms/Textarea";
import Label from "../../atoms/Label";
import Paragraph from "../../atoms/Paragraph";
import styles, { LabelWrapper } from "./FormInput.style";
// import Tooltip from "../../atoms/Tooltip/Tooltip";
// import Calendar from "../Calendar";
// import { getHypenString } from "../../../utils/common";

// type Props = {
//   id: string,
//   className?: string,
//   name?: string,
//   errorMessage?: string,
//   success?: string | boolean,
//   placeholder?: string,
//   labelPlaceholder?: string,
//   optional?: string | boolean,
//   optionalText?: string,
//   disabled?: string | boolean,
//   renderTextarea?: boolean,
//   isArabicLocale?: boolean,
//   hiddenLabel?: boolean,
//   hiddenLabelPlaceholder?: string,
//   detailedLabelFor?: boolean,
// };

const FormInput = ({
  id,
  ariaLabelledBy,
  className,
  labelPlaceholder,
  hiddenLabel,
  hiddenLabelPlaceholder,
  detailedLabelFor,
  renderTextarea,
  dir,
  isArabicLocale,
  ...otherProps
}) => {
  let errorMsg = "";
  // if (!otherProps.disabled) {
  if (typeof otherProps.errorMessage === "string") {
    errorMsg = otherProps.errorMessage;
  } else if (
    otherProps.errorMessage &&
    otherProps.errorMessage[otherProps.name] &&
    otherProps.errorMessage[otherProps.name].message
  ) {
    errorMsg = otherProps.errorMessage[otherProps.name].message;
  }
  // }
  let inputState = "default";
  let ariaDescribedby = null;
  const labelId = id || getHypenString(labelPlaceholder);
  if (errorMsg) {
    ariaDescribedby = `${id}_areaDescribedBy`;
    inputState = "error";
  } else if (otherProps.success) {
    inputState = "success";
  }

  return (
    <div className={className}>
      {labelPlaceholder && !hiddenLabel ? (
        <LabelWrapper>
          <Label
            labelFor={detailedLabelFor || labelId}
            disabled={otherProps.disabled}
            {...otherProps}
            size={otherProps.size}
          >
            {labelPlaceholder}
          </Label>

          {otherProps.optional ? (
            <span className="optional">{otherProps.optionalText}</span>
          ) : null}
          {/* {otherProps.tooltipContent ? (
            <Tooltip
              tooltipContent={otherProps.tooltipContent}
              id={
                `${id}-tooltip` ||
                `${otherProps.name}-tooltip` ||
                "dummyId-tooltip"
              }
            />
          ) : null} */}
        </LabelWrapper>
      ) : null}
      {!labelPlaceholder && otherProps.optional && !hiddenLabel && (
        <LabelWrapper>
          <Label className="visually-hidden">{otherProps.optionalText}</Label>
          <span className="optional">{otherProps.optionalText}</span>
        </LabelWrapper>
      )}
      {hiddenLabel && (
        <LabelWrapper className={!otherProps.optional && "visually-hidden"}>
          <Label labelFor={labelId} className="visually-hidden">
            {hiddenLabelPlaceholder || otherProps.placeholder}
          </Label>
        </LabelWrapper>
      )}
      {/* {otherProps.type === "date" ? (
        <Calendar
          id={id}
          isArabicLocale={isArabicLocale}
          showWithRange={false}
          inputState={inputState}
          aria-describedby={ariaDescribedby}
          {...otherProps}
        />
      ) : renderTextarea ? (
        <Textarea
          dir={dir || ""}
          className="textArea"
          id={id}
          {...otherProps}
          inputState={inputState}
          aria-describedby={ariaDescribedby}
          aria_labelledby={ariaLabelledBy}
        />
      ) : ( */}
      <Input
        dir={dir || ""}
        id={id}
        {...otherProps}
        inputState={inputState}
        placeholder={otherProps.disabled ? undefined : otherProps.placeholder}
        aria-describedby={ariaDescribedby}
        aria-labelledby={ariaLabelledBy}
      />
      {/* )} */}

      {otherProps.showPercentage && (
        <span className="disabledInfo">{otherProps.showPercentage}</span>
      )}
      {errorMsg ? (
        <Paragraph
          className="error"
          error
          type="small"
          id={ariaDescribedby}
          {...otherProps}
        >
          {errorMsg}
        </Paragraph>
      ) : null}
    </div>
  );
};
FormInput.defaultProps = {
  className: "",
  name: "",
  hiddenLabel: false,
  hiddenLabelPlaceholder: "",
  detailedLabelFor: "",
  errorMessage: null,
  success: false,
  placeholder: "",
  labelPlaceholder: "",
  optional: false,
  optionalText: "(Optional)",
  disabled: false,
  renderTextarea: false,
  isArabicLocale: true,
};

const StyledFormInput = styled(FormInput)`
  ${styles};
`;

export { FormInput as FormInputVanilla };

export default StyledFormInput;
