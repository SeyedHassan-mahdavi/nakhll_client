const ErrorMessage = ({ message, visible }) => {
  if (!message || !visible) return null;

  return <p className="text-danger">{message}</p>;
};
export default ErrorMessage;
