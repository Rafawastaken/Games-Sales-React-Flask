import {
  Box,
  Flex,
  UnorderedList,
  ListItem,
  Link,
  Text,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      width={"100%"}
      borderBottom={"1px solid white"}
      bg={"#1a2950"}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      py={5}
    >
      <Box ms={10}>
        <Text fontSize={18} fontWeight={"bold"}>
          Price Checker
        </Text>
      </Box>

      <Box me={"5em"}>
        <UnorderedList display={"flex"} gap={10}>
          <ListItem listStyleType={"none"}>
            <Link to={"/"} as={RouterLink}>
              Home
            </Link>
          </ListItem>
          <ListItem listStyleType={"none"}>
            <Link to={"/add-game"} as={RouterLink}>
              Add Game
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default Navbar;
