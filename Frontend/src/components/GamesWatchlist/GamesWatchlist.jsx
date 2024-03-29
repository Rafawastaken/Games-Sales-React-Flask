import { useEffect, useState } from "react";
import { Table, Td, Tr, Th, Thead, Tbody, Image, Text } from "@chakra-ui/react";

import { GET_GAMES } from "../../endpoints/endpoints";

import RemoveBtn from "../RemoveBtn/RemoveBtn";
import LinkButton from "../LinkButton/LinkButton";

const GamesWatchlist = () => {
  const [games, setGames] = useState(null);

  //   Request to api/games to get games
  const loadGames = async () => {
    const response = await fetch(GET_GAMES);
    const responseData = await response.json();

    setGames(responseData);
    console.log(responseData);
  };

  // Makes it run on render
  useEffect(() => {
    loadGames();
  }, []);

  return (
    <>
      {games ? (
        <Table
          w={"full"}
          variant="striped"
          colorScheme="blue"
          borderWidth={"2px"}
        >
          <Thead>
            <Tr>
              <Th fontSize={14} py={5} color={"white"} textAlign={"center"}>
                Image
              </Th>
              <Th fontSize={14} py={5} color={"white"} textAlign={"center"}>
                Title
              </Th>
              <Th fontSize={14} py={5} color={"white"} textAlign={"center"}>
                Current Price
              </Th>
              <Th fontSize={14} py={5} color={"white"} textAlign={"center"}>
                Lowest Price
              </Th>
              <Th fontSize={14} py={5} color={"white"} textAlign={"center"}>
                Get it
              </Th>
              <Th fontSize={14} py={5} color={"white"} textAlign={"center"}>
                Remove
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {games.map((game) => (
              <Tr key={game.id} borderBottom={"2px solid #ffffff84"}>
                <Td textAlign="center" display="flex" justifyContent="center">
                  <Image src={game.header_img} rounded="md" w="125px" />
                </Td>
                <Td textAlign={"center"}>{game.name}</Td>
                <Td textAlign={"center"}>{game.current_price}</Td>
                <Td textAlign={"center"}>{game.lowest_price}</Td>
                <Td textAlign={"center"}>
                  <LinkButton target={game.link} text={"Buy it"} />
                </Td>
                <Td textAlign={"center"}>
                  <RemoveBtn id={game.id} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <Text>Loading...</Text>
      )}
    </>
  );
};

export default GamesWatchlist;
