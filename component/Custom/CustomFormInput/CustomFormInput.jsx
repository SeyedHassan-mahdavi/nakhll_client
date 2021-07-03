import { Fragment, useState } from "react";

import ErrorMessage from "./../CustomErrorMessage/CustomErrorMessage";
import CustomInfoTooltip from "../CustomInfoTooltip/CustomInfoTooltip";
import { formInputValidation } from "../../validation/validation";

const CustomFormInput = ({
  label,
  value,
  name,
  length,
  suffixText,
  isCounter,
  setValue,
  tooltipTitle,
  isShowAppearance,
  type = "text",
  validation = [],
  className = "",
  isTextArea = false,
  ...otherProps
}) => {
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false);

  const { errorMessages } = formInputValidation(value, validation);

  let isValueLengthBigherThanLength = value?.length >= length;

  const handleIncrement = () => {
    setValue(name, Number(value) + 1);
  };

  const handleDecrement = () => {
    if (value == 0) {
      return;
    }
    setValue(name, Number(value) - 1);
  };

  let defaultStyle = `form-control ${suffixText && "border-left-0"} ${
    !isShowAppearance && "_text_field"
  }`;

  return (
    <Fragment>
      <div>
        <div>
          {label && (
            <label for={name}>
              {label}
              {tooltipTitle && (
                <span className="ml-1">
                  <CustomInfoTooltip title={tooltipTitle} />
                </span>
              )}
            </label>
          )}
          {length && (
            <span
              className={`float-left ${
                isValueLengthBigherThanLength ? "text-danger" : null
              }`}
            >{`${value?.length}/${length}`}</span>
          )}
        </div>

        {isCounter ? (
          <div>
            <div className="input-group mb-3">
              <div className="input-group-append">
                <span
                  className="input-group-text border-left-0"
                  type="button"
                  style={{ background: "unset" }}
                  onClick={handleIncrement}
                >
                  +
                </span>
              </div>
              <input
                id={name}
                value={value}
                type="number"
                className={`${defaultStyle} text-center border-right-0 border-left-0 ${className}`}
                onBlur={() => setIsErrorMessageVisible(true)}
                min="0"
                maxLength={length}
                {...otherProps}
              />
              <div className="input-group-prepend">
                <span
                  className="input-group-text border-right-0"
                  type="button"
                  style={{ background: "unset" }}
                  onClick={handleDecrement}
                >
                  -
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="input-group mb-3">
            {isTextArea ? (
              <textarea
                id={name}
                value={value}
                className={`${defaultStyle} ${className}`}
                onBlur={() => setIsErrorMessageVisible(true)}
                rows="7"
                maxLength={length}
                {...otherProps}
              />
            ) : (
              <input
                id={name}
                value={value}
                type={type}
                className={`${defaultStyle} ${className}`}
                onBlur={() => setIsErrorMessageVisible(true)}
                maxLength={length}
                {...otherProps}
              />
            )}
            {suffixText && (
              <div className="input-group-prepend">
                <span
                  className="input-group-text border-right-0"
                  style={{ background: "unset" }}
                >
                  {suffixText}
                </span>
              </div>
            )}
          </div>
        )}

        <ErrorMessage visible={isErrorMessageVisible} message={errorMessages} />
      </div>
    </Fragment>
  );
};

export default CustomFormInput;
