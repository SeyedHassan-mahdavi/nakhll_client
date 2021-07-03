import { Fragment, useRef, useState } from "react";
import { Overlay } from "react-bootstrap";

const CustomInfoTooltip = ({ title, placement = "top" }) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <Fragment>
      <i
        className="fa fa-info-circle"
        ref={target}
        onMouseEnter={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      />
      <Overlay target={target.current} show={show} placement={placement}>
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: "#555555",
              padding: "2px 10px",
              color: "white",
              borderRadius: 3,
              fontSize: ".9em",
              marginBottom: 10,
              maxWidth: 300,
              textAlign: "justify",
              ...props.style,
            }}
          >
            {title}
          </div>
        )}
      </Overlay>
    </Fragment>
  );
};

export default CustomInfoTooltip;
