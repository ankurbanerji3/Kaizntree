import classNames from "classnames";
import { useRef } from "react";
import { InputCheckboxComponent } from "./types";

// Inside InputCheckbox component
export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`KaizntreeInputCheckbox-${id}`);

  return (
    <div className="KaizntreeInputCheckbox--container" data-testid={inputId}>
      <label
        htmlFor={inputId}
        className={classNames("KaizntreeInputCheckbox--label", {
          "KaizntreeInputCheckbox--label-checked": checked,
          "KaizntreeInputCheckbox--label-disabled": disabled,
        })}
      ></label>
      <input
        id={inputId}
        type="checkbox"
        className="KaizntreeInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)} // Use the event object
      />
    </div>
  );
};
