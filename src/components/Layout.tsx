import { Box } from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box minH="100vh" display={"flex"} flexDir={"column"}>
      <NavBar />
      {children}
    </Box>
  );
};

export default Layout;
