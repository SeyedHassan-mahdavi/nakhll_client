import { Link } from "react-router-dom";

const CustomButton = ({
  className,
  children,
  buttonType,
  color = "primary",
  url,
  ...otherProps
}) => {
  switch (buttonType) {
    case "link":
      return (
        <Link
          to={url}
          {...otherProps}
          className={`btn btn-${color} ${className}`}
        >
          {children}
        </Link>
      );
    case "anchor":
      return (
        <a
          href={url}
          {...otherProps}
          className={`btn btn-${color} ${className}`}
        >
          {children}
        </a>
      );

    default:
      return (
        <button {...otherProps} className={`btn btn-${color} ${className}`}>
          {children}
        </button>
      );
  }
};

export default CustomButton;
