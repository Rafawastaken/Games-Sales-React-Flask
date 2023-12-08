import { Box, Flex } from "@chakra-ui/react";

import Navbar from "../components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <Flex direction={"column"}>
      <Navbar />
      <Box>{children}</Box>
    </Flex>
  );
};

export default Layout;
