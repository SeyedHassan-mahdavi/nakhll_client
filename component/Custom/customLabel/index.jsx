import styles from '../../../styles/custom/label.module.scss';
/**
 * component of custom badge
 * @param {string} value => value of label
 * @param {string} label => label of label
 * @param {string} customLabelDiv => class name of div wrapper of labels
 * @param {string} customLabel => class name of span label
 * @param {string} customValue => class name of span value
 */
const CustomLabel = ({
    value,
    label,
    customLabelDiv,
    customLabel,
    customValue
}) => {
    return (
        <div className=
            {`${styles.label} ${customLabelDiv !== undefined && customLabelDiv}`}
        >
            <span className={`${styles.span_label} ${customLabel !== undefined && customLabel}`}>
                {label}:
            </span>
            <span className={`${styles.span_value} ${customValue !== undefined && customValue}`}>
                {value}
            </span>
        </div>
    );
}
// export
export default CustomLabel;