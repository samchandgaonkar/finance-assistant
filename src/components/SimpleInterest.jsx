import {
  Box,
  Heading,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  FormLabel,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
function SimpleInterest(props) {
  const [principal, setPrincipal] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [rate, setRate] = useState(0);
  const [interest, setInterest] = useState(0);

  useEffect(() => {
    setInterest(calculateInterest(principal, tenure, rate));
  }, [principal, tenure, rate]);

  const handleTenureChange = (val) => {
    setTenure(val);
  };

  const handleRateChange = (val) => {
    setRate(val);
  };

  const handlePrincipalChange = (val) => {
    setPrincipal(val * 1000);
  };

  const calculateInterest = (principal, tenure, rate) => {
    return (principal * tenure * rate) / 100;
  };

  return (
    <>
      <Box className="page-heading">
        <Heading fontSize={"22px"} display={"flex"} alignItems={"center"}>
          Simple Interest Calculator
        </Heading>
      </Box>
      <Box className="page-content">
        <Box className="page-row">
          <Box className="page-column half-column">
            <Box className="input-row" key={"principal"}>
              <FormLabel>Principal : {principal} </FormLabel>
              <Slider
                step={0.1}
                max={10000}
                aria-label="slider-ex-4"
                defaultValue={0}
                onChange={(val) => handlePrincipalChange(val)}
              >
                <SliderTrack bg="green.100">
                  <SliderFilledTrack bg="green" />
                </SliderTrack>
                <SliderThumb boxSize={5} bg={"green"}>
                  <Box color="tomato" />
                </SliderThumb>
              </Slider>
            </Box>

            <Box className="input-row" key={"tenure"}>
              <FormLabel>Tenure in years : {tenure} </FormLabel>
              <Slider
                aria-label="slider-ex-4"
                defaultValue={0}
                max={30}
                onChange={(val) => handleTenureChange(val)}
              >
                <SliderTrack bg="green.100">
                  <SliderFilledTrack bg="green" />
                </SliderTrack>
                <SliderThumb boxSize={5} bg={"green"}>
                  <Box color="tomato" />
                </SliderThumb>
              </Slider>
            </Box>

            <Box className="input-row" key={"rate"}>
              <FormLabel>Rate % per anum: {rate} </FormLabel>
              <Slider
                aria-label="slider-ex-4"
                defaultValue={0}
                onChange={(val) => handleRateChange(val)}
              >
                <SliderTrack bg="green.100">
                  <SliderFilledTrack bg="green" />
                </SliderTrack>
                <SliderThumb boxSize={5} bg={"green"}>
                  <Box color="tomato" />
                </SliderThumb>
              </Slider>
            </Box>
          </Box>

          <Box className="page-column half-column">
            <Box className="page-row" fontWeight={"500"}>
              Finance Calculation:
            </Box>
            <Box className="page-row" mt={"10px"}>
              <Box className="page-column half-column">Total Interest :</Box>
              <Box className="page-column half-column">{interest}</Box>
            </Box>
            <Box className="page-row">
              <Box className="page-column half-column">Total Amount :</Box>
              <Box className="page-column half-column">
                {principal + interest}
              </Box>
            </Box>
            <Box className="page-row">
              <Box className="page-column half-column">EMI :</Box>
              <Box className="page-column half-column">
                {tenure == 0 ? 0 : (principal + interest) / (tenure * 12)}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default SimpleInterest;
