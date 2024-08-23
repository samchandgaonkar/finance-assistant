function LabelAndValue({ label, value }) {
 return (
    <div className="output-wrapper">
    <div className="row">
      <div className="col-5">
        <h5>{label || "Please add Label Prop"}</h5>
      </div>
      <div className="col-6">
        <h5>{value || "Please add value Prop"}</h5>
      </div>
    </div>
  </div>
 )
}
export default LabelAndValue;
