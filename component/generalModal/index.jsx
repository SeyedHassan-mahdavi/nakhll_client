// node
import { useState, useEffect } from 'react';
// scss
import styles from './general.module.scss';

/**
 * component general modal
 * @param {boolean} show => open the modal
 * @param {method} onClose => close the modal
 * @param {string} wrapperClassName => wrapper class
 * @param {string} className => class name of content
 * @param {ReactElement} content => content of modal
 * @returns 
 */
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
                    className={`${styles.general_modal_wrapper} ${wrapperClassName ? wrapperClassName : ''}`}
                    onClick={() => {
                        setOpen(open => !open);
                        onClose();
                    }}
                >
                    <div
                        className={`${styles.general_modal_content_div} ${className ? className : ''}`}
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