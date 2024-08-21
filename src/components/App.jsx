import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import '../index.css';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box className="app-container" display={'flex'}>
        <SideNav/>
        <Outlet/>
      </Box>
    </ChakraProvider>
  );
};