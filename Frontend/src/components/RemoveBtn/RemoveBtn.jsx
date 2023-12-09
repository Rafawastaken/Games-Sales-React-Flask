import { Button } from "@chakra-ui/react";
import { DELETE_GAME } from "../../endpoints/endpoints";
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { useEffect } from "react";

const RemoveBtn = ({ id }) => {
  // Delete game func
  const deleteGame = async () => {
    const response = await fetch(DELETE_GAME, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    if (response.ok) {
      console.log("Delete request success");
      window.location.reload();
    }
  };

  return (
    <Button
      fontSize={23}
      py={2}
      px={4}
      bg={"#be3131"}
      border={"1px solid #b81f1f"}
      rounded={"md"}
      textTransform={"uppercase"}
      fontWeight={"bold"}
      _hover={{
        textDecoration: "none",
        bg: "#ca3333",
        transition: "all ease-in-out 0.3s",
      }}
      onClick={deleteGame}
    >
      <MdOutlinePlaylistRemove />
    </Button>
  );
};

export default RemoveBtn;
