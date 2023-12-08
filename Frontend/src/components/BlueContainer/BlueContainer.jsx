import { Flex, Box, Text } from "@chakra-ui/react";

const BlueContainer = ({ title, children }) => {
  return (
    <Flex
      w={"full"}
      mt={"2em"}
      height={"auto"}
      // alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        bg={"#1a2950"}
        w={"75%"}
        h={"auto"}
        p={"2em"}
        borderRadius={"md"}
        border={"1px solid white"}
      >
        <Flex direction={"column"}>
          <Text color={"white"} fontSize={24} fontWeight={"medium"}>
            {title}
          </Text>
          <Box border={"1px solid #ffffff6a"} p={0} my={2} />
          {children}
        </Flex>
      </Box>
    </Flex>
  );
};

export default BlueContainer;
