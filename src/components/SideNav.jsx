import { Box, Heading, MenuItem, Menu, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

function SideNav() {
  return (
    <Box className="sidebar" borderRight={"0.5px solid blue"} height={"100vh"}>
      <Box
        className="logo"
        bgColor={"blue"}
        color={"#fff"}
        maxW={"300px"}
        h={"40px"}
        display={"flex"}
        alignItems={"center"}
      >
        <Image w={"40px"} src={logo} alt="logo" />
        <Heading size={''}>Finance Assistant</Heading>
      </Box>
      <Menu
        as="ul"
        display={"flex"}
        flexDir={"column"}
        height={"100vh"}
        bgColor={"lightgreen"}
        maxW={"300px"}
      >
        <MenuItem>
          <Link to={"/simple"}> Simple Interest Calculator</Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/compound"}>Compound Interest Calculator</Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/repayment"}>Early Pay Off Calculator</Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default SideNav;
