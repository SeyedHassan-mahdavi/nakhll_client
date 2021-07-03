const CustomDivNote = ({text,text2}) => {
  return (
    <div className="col-lg-5 d-none d-lg-flex pt-3">
      <i className="bi-info icon-size m-2 text-secondary"></i>
      <p className="text-filed-helper small-text">
        {text}
        <br/>
        {text2 && text2}
      </p>
    </div>
  );
};

export default CustomDivNote;
