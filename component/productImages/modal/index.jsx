// node
import  { useState, useEffect } from 'react';
// component modal
const Modal = ({
    show,
    onClose,
    wrapperClassName,
    className,
    content
}) => {
    let [open, setOpen] = useState(false);
    // use effect
    useEffect(() => {
        setOpen(show);
    }, [show]);
    return (
        <>
            {open &&
                <div
                    className={`modalProduct ${wrapperClassName ? wrapperClassName : ''}`}
                    onClick={() => {
                        setOpen(open => !open);
                        onClose();
                    }}
                >
                    <div
                        className={`modalProduct__div ${className ? className : ''}`}
                        onClick={(event) => {
                            event.stopPropagation();
                        }}
                    >
                        {content}
                    </div>
                </div>
            }
        </>
    );
}
// export
export default Modal;