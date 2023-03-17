import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissable">
      {children}
      <button
        className="btn-close"
        type="button"
        data-bs-dismissable="alert"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
