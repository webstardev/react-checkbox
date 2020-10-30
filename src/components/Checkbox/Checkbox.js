import React, { useRef } from "react";

import css from "./styles.css";

interface CheckboxProps {
  children: React.ReactNode;
  className?: Object;
  style?: Object;
  id?: any;
  disabled?: Boolean;
  onChange: Function;
  checked: Boolean;
}

const Checkbox = (props: CheckboxProps): JSX.Element => {
  const {
    children,
    className,
    style,
    id,
    disabled,
    onChange,
    checked = false,
  } = props;

  const checkboxRef = useRef(null);

  const classList = [css.Label];

  if (className) {
    classList.push(className);
  }

  return (
    <>
      <input
        type="checkbox"
        className={css.Checkbox}
        id={id}
        ref={checkboxRef}
        disabled={disabled}
        checked={checked}
        onChange={
          onChange
            ? (e: React.ChangeEvent<HTMLInputElement>): void =>
                onChange(e.target.checked)
            : undefined
        }
      />

      <span
        onClick={(): void => {
          if (disabled) {
            return;
          }

          if (checkboxRef.current) {
            checkboxRef.current.checked = !checkboxRef.current.checked;
            checkboxRef.current.focus();

            if (onChange) {
              onChange(checkboxRef.current.checked);
            }
          }
        }}
        role="button"
        className={classList.join(" ")}
        style={style}
      >
        <span />

        {children}
      </span>
    </>
  );
};

export default Checkbox;
