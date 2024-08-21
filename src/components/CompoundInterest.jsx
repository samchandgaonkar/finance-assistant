import { Box, Heading } from "@chakra-ui/react";
import React from "react";
function CompoundInterest(props) {
  return (
    <>
      <Box className="page-heading">
        <Heading size={""} display={"flex"} alignItems={"center"}>
          Compound Interest Calculator
        </Heading>
      </Box>
      <Box className="page-content">Content Goes here</Box>
    </>
  );
}

export default CompoundInterest;
