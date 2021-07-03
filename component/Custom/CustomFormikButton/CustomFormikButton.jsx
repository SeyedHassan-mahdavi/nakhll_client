import { useFormikContext } from "formik";

const CustomFormikButton = ({
  className,
  children,
  color = "primary",
  ...otherProps
}) => {
  const { handleSubmit } = useFormikContext();
  return (
    <button
      {...otherProps}
      onClick={handleSubmit}
      className={`btn btn-${color} ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomFormikButton;
