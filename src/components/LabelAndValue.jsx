function LabelAndValue({ label, value }) {
  return (
    <div className="output-wrapper">
      <div className="row">
        <span>
          {label}:{value}
        </span>
      </div>
    </div>
  );
}
export default LabelAndValue;
