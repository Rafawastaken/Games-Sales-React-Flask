import { Flex, Box, Text } from "@chakra-ui/react";

import BlueContainer from "../../components/BlueContainer/BlueContainer";

const AddGamePage = () => {
  const logGames = () => {
    console.log("GAMES Logged");
  };

  return (
    <BlueContainer title={"Add Game to Watchlist"}>
      Games will be added here
    </BlueContainer>
  );
};

export default AddGamePage;
