import React, { useEffect, useState } from "react";
import InputRange from "./InputRange";
import LabelAndValue from "./LabelAndValue";

function SimpleInterest(props) {
  const [principal, setPrincipal] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [rate, setRate] = useState(0);
  const [interest, setInterest] = useState(0);
  const [amount, setAmount] = useState(0);
  const [months, setMonths] = useState(0);

  const calculateInterest = (principal, tenure, rate) => {
    return (principal * tenure * rate) / 100;
  };
  const roundItOff = (value) => {
    return parseFloat(value).toFixed(2);
  };
  useEffect(() => {
    setInterest(roundItOff(calculateInterest(principal, tenure, rate)));
    setAmount(roundItOff(Number(principal) + Number(interest)));
  }, [principal, tenure, rate, interest]);

  const handlePrincipalChange = (val) => {
    setPrincipal(parseFloat(val));
  };

  const handleTenureChange = (val) => {
    setTenure(parseFloat(val));
    setMonths(parseFloat(val) * 12);
    console.log(months);
  };

  const handleRateChange = (val) => {
    setRate(parseFloat(val));
  };

  return (
    <div className="container-fluid p-0 m-0">
      <div className="app-page-title">
        <h4>Simple Interest Calculator</h4>
      </div>

      <div className="app-page-content">
        <div className="row px-5">
          <div className="col-12 col-lg-6">
            <div className="card">
              <div className="card-header">Loan Parameters</div>
              <div className="card-body">
                <InputRange
                  key={"principal"}
                  minValue={0}
                  maxValue={10000000}
                  label={"Principal Amount"}
                  currentValue={principal}
                  onRangeChange={(e) => handlePrincipalChange(e.target.value)}
                ></InputRange>
                <InputRange
                  key={"tenure"}
                  minValue={0}
                  maxValue={30}
                  label={"Duration of Loan in Years"}
                  currentValue={tenure}
                  onRangeChange={(e) => handleTenureChange(e.target.value)}
                ></InputRange>
                <InputRange
                  key={"rate"}
                  minValue={0}
                  maxValue={30}
                  label={"Loan Rate % Per Year"}
                  currentValue={rate}
                  onRangeChange={(e) => handleRateChange(e.target.value)}
                ></InputRange>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card">
              <div className="card-header">Loan Calculations</div>
              <div className="card-body">
                <ul className="loan-calculations">
                  <li>
                    <LabelAndValue
                      label={"Total Interest"}
                      value={interest}
                    ></LabelAndValue>
                  </li>
                  <li>
                    <LabelAndValue
                      label={"Total Amount"}
                      value={amount}
                    ></LabelAndValue>
                  </li>
                  <li>
                    <LabelAndValue
                      label={"Monthly EMI"}
                      value={
                        tenure && roundItOff(Number(amount) / Number(months))
                      }
                    ></LabelAndValue>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleInterest;
