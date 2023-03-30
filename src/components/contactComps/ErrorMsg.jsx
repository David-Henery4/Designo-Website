import {ErrorIcon} from "../../assets"

const ErrorMsg = ({ msg, isMessageInput = false }) => {
  return (
    <div
      className={`absolute flex gap-2 right-0 text-xs font-normal italic ${
        isMessageInput ? "top-3" : "bottom-3"
      }`}
    >
      <p>{msg}</p>
      <ErrorIcon />
    </div>
  );
};

export default ErrorMsg