function InputRange({ minValue, maxValue, label, onRangeChange, currentValue}) {
  
  return (
    <div className="input-range-wrapper row">
      <div className="col-6">
        <label>{label || "Label"}</label>
      </div>
      <div className="col-3 offset-3">
        <input
          onChange={(e) => onRangeChange(e)}
          type="number"
          min={minValue || 0}
          max={maxValue || 100}
          step={0.1}
          value={currentValue}
        />
      </div>
      <div className="col-12">
        <input
          onChange={(e) => onRangeChange(e)}
          type="range"
          min={minValue || 0}
          max={maxValue || 100}
          step={0.1}
          value={currentValue}
        />
      </div>
    </div>
  );
}

export default InputRange;
