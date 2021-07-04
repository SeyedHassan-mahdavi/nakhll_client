const CustomSelectList = ({
  label,
  selectedText,
  valuesSelect = [],
  name,
  className = "",
  ...otherProps
}) => {
  return (
    <>
      <div>
        {label && <label htmlFor={name}>{label}</label>}
        <div>
        <select
        id={name}
        className="form-control" >
          <option selected value="noting">{selectedText}</option>
          {valuesSelect.map((a, index) => (
            <option value={index}>{a}</option>
          ))}
        </select>
        </div>
      </div>
    </>
  );
};

export default CustomSelectList;
