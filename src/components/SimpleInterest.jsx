import {
  Box,
  Heading,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  FormLabel,
} from "@chakra-ui/react";
import React, { useState } from "react";
function SimpleInterest(props) {
  const [principal, setPrincipal] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [rate, setRate] = useState(0);

  const handleTenureChange = (val) => {
    setTenure(val);
  };

  return (
    <>
      <Box className="page-header">
        <Heading size={""} display={"flex"} alignItems={"center"}>
          Simple Interest Calculator
        </Heading>
      </Box>
      <Box className="page-content">
        <Box className="page-row">
          <FormLabel>Tenure in years : {tenure} </FormLabel>
          <RangeSlider 
            aria-label={["min", "max"]}
            defaultValue={[0, 0]}
            onChangeEnd={(val) => handleTenureChange(val)}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </Box>
      </Box>
    </>
  );
}

export default SimpleInterest;
