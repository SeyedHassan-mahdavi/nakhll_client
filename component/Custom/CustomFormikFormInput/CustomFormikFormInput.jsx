import { useFormikContext } from "formik";
import { Fragment, useState } from "react";

import ErrorMessage from "../CustomErrorMessage/CustomErrorMessage";
import { formInputValidation } from "../../../utils/validation/validation";
import CustomInfoTooltip from "./../CustomInfoTooltip/CustomInfoTooltip";

const CustomFormikFormInput = ({
  label,
  name,
  length,
  suffixText,
  isCounter,
  tooltipTitle,
  isShowAppearance,
  type = "text",
  validation = [],
  className = "",
  isTextArea = false,
  ...otherProps
}) => {
  const {
    setFieldValue,
    handleChange,
    setFieldTouched,
    errors,
    touched,
    values,
  } = useFormikContext();

  let value = values[name];

  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false);

  const { errorMessages } = formInputValidation(value, validation);

  let isValueLengthBigherThanLength = value?.length >= length;

  const handleIncrement = () => {
    setFieldValue(name, Number(value) + 1);
  };

  const handleDecrement = () => {
    if (value == 0) {
      return;
    }
    setFieldValue(name, Number(value) - 1);
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
                  onClick={handleIncrement}
                  style={{ background: "unset" }}
                >
                  +
                </span>
              </div>
              <input
                id={name}
                value={value}
                type="number"
                className={`${defaultStyle} text-center border-right-0 border-left-0 ${className}`}
                min="0"
                maxLength={length}
                onChange={handleChange(name)}
                onBlur={() => {
                  setFieldTouched(name);
                  setIsErrorMessageVisible(true);
                }}
                {...otherProps}
              />
              <div className="input-group-prepend">
                <span
                  className="input-group-text border-right-0"
                  type="button"
                  onClick={handleDecrement}
                  style={{ background: "unset" }}
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
                rows="7"
                maxLength={length}
                onChange={handleChange(name)}
                onBlur={() => {
                  setFieldTouched(name);
                  setIsErrorMessageVisible(true);
                }}
                {...otherProps}
              />
            ) : (
              <input
                id={name}
                value={value}
                type={type}
                className={`${defaultStyle} ${className}`}
                maxLength={length}
                onChange={handleChange(name)}
                onBlur={() => {
                  setFieldTouched(name);
                  setIsErrorMessageVisible(true);
                }}
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
        <ErrorMessage visible={touched[name]} message={errors[name]} />
      </div>
    </Fragment>
  );
};

export default CustomFormikFormInput;
