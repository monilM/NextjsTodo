// @flow
import React, { useState } from "react";
import { StyledInput, InputWrapper } from "./Input.style";

type Props = {
  id: string,
  className?: string,
  name?: string,
  type?: string,
  value: string | number,
  placeholder?: string,
  disabled?: string | boolean,
  inputState?: "default" | "success" | "error",
  iconType?: string,
  iconClickHandler?: SyntheticEvent<>,
};

const Input = ({ id, name, type, ...others }: Props): Node => {
  const [showPassword, togglePassword] = useState(false);

  const passwordToggleHandler = () => {
    togglePassword(!showPassword);
  };

  let inputType = `${type}`;
  if (type === "password") {
    inputType = showPassword ? "text" : "password";
  }
  return (
    <InputWrapper disabled={others.disabled}>
      <StyledInput
        id={id}
        name={name}
        {...others}
        ref={others.outerRef}
        type={inputType}
        originalType={type}
        disabled={
          others.inputType === "date"
            ? true
            : others.disabled || others.inputDisabled
        }
        autoComplete="new-password"
      />
      {others.iconType ? (
        <span
          className={`inputIcon ${others.iconType}`}
          onClick={others.iconClickHandler}
        />
      ) : null}
      {type === "password" ? (
        <button
          aria-label="Toggle Password"
          className="inputIcon icon-View togglePassword"
          type="button"
          onClick={passwordToggleHandler}
        />
      ) : null}
      {others.inputType === "date" ? (
        <button
          type="button"
          className="calendarBtn"
          onClick={others.calendarBtnHandler}
          title={others.isArabicLocale ? "أيقونة التقويم" : "Calendar Icon"}
          aria-label={
            others.isArabicLocale
              ? "انقر لفتح التقويم"
              : "Click to open the calendar"
          }
          disabled={others.disabled}
        >
          <span className="visually-hidden">Calendar Icon</span>
          <span className="icon-calender"></span>
        </button>
      ) : null}
    </InputWrapper>
  );
};

Input.defaultProps = {
  className: "",
  name: "",
  type: "text",
  placeholder: "",
  disabled: false,
  inputState: "default",
  iconType: null,
  iconClickHandler: () => {},
};

export default Input;
export { Input as InputVanilla };
