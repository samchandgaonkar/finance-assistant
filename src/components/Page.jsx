import { Box } from "@chakra-ui/react";
import React from "react";
function Page(props) {
  return <Box className="page-container">{props.children}</Box>;
}

export default Page;
