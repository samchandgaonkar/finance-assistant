import { Box, ChakraProvider, Heading, theme } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import "../index.css";
import { useLocation } from "react-router-dom";
import Page from "./Page";

export const App = () => {
  const location = useLocation();
  console.log(location);
  return (
    <ChakraProvider theme={theme}>
      <Box className="app-container" display={"flex"}>
        <SideNav />
        {location.pathname === "/" && (
          <Page>
            <Box
              height={"100%"}
              w={"100%"}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Heading color={"green"} size={"2xl"} margin={"10px"}>
                Welcome to Finance Assistant
              </Heading>
              <Heading size={""} margin={"10px"}>
                Please choose an option from sidebar to begin...
              </Heading>
            </Box>
          </Page>
        )}

        <Outlet />
      </Box>
    </ChakraProvider>
  );
};
