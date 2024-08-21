import { Box, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../applogo.png";

function Header() {
  return (
    <Box as="header">
      <Box
        className="logo"
        bgColor={"green"}
        color={"#fff"}
        h={"50px"}
        display={"flex"}
        alignItems={"center"}
      >
        <Image mr={3} w={"40px"} src={logo} alt="logo" />
        <Heading className="app-name" size={""}>Finance Assistant </Heading>
      </Box>
      <Box as="ul" display={"flex"}>
        <Box as="li">
          <Link to={"/simple"}> Simple Interest Calculator</Link>
        </Box>
        <Box as="li">
          <Link to={"/compound"}>Compound Interest Calculator</Link>
        </Box>
        <Box as="li">
          <Link to={"/repayment"}>Early Pay Off Calculator</Link>
        </Box>
        <Box as="li">
          <Link to={"/"}>🏠︎ Back to Home</Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
