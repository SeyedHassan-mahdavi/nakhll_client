import { Fragment } from "react";

const CustomSwitchButton = ({ isSquare, name, label, ...otherProps }) => {
  return (
    <div className="d-flex justify-content-between">
      {label && (
        <label className="ml-2" for={name}>
          {label}
        </label>
      )}
      <label className="switch">
        <input id={name} {...otherProps} type="checkbox" />
        <span className={`slider ${isSquare && "round"}`}></span>
      </label>
    </div>
  );
};

export default CustomSwitchButton;
