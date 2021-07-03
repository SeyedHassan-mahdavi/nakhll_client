import { Fragment } from "react";
import { Modal } from "react-bootstrap";

const CustomModal = ({
  closeModal,
  isShow,
  className,
  title,
  footer,
  children,
  size = "lg",
  isShowHeader = true,
  closeButton = true,
  ...otherModalProps
}) => {
  return (
    <Fragment>
      <Modal
        show={isShow}
        onHide={closeModal}
        size={size}
        centered
        className={`rtl ${className}`}
        {...otherModalProps}
      >
        {isShowHeader && (
          <Modal.Header closeButton={closeButton}>
            {title && <Modal.Title>{title}</Modal.Title>}
          </Modal.Header>
        )}
        <Modal.Body>{children}</Modal.Body>
        {footer && <Modal.Footer>{footer}</Modal.Footer>}
      </Modal>
    </Fragment>
  );
};

export default CustomModal;
