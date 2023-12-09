import { Input, Button, VStack } from "@chakra-ui/react";

import BlueContainer from "../../components/BlueContainer/BlueContainer";
import { POST_GAME } from "../../endpoints/endpoints";

import { useState } from "react";

const AddGamePage = () => {
  const [inputs, setInputs] = useState({
    name: "",
    link: "",
    header_img: "",
    current_price: "",
  });

  const handleSubmit = async () => {
    const response = await fetch(POST_GAME, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });

    if (response.ok) {
      console.log("Post request success");
    }
  };

  return (
    <BlueContainer title={"Add Game to Watchlist"}>
      <VStack spacing={4}>
        <Input
          placeholder="Game name"
          type="text"
          value={inputs.name}
          border={"1px solid #ffffff7d"}
          color={"white"}
          onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
        />
        <Input
          placeholder="Game Link"
          type="text"
          value={inputs.link}
          border={"1px solid #ffffff7d"}
          color={"white"}
          onChange={(e) => setInputs({ ...inputs, link: e.target.value })}
        />
        <Input
          placeholder="Game Image"
          type="text"
          value={inputs.header_img}
          border={"1px solid #ffffff7d"}
          color={"white"}
          onChange={(e) => setInputs({ ...inputs, header_img: e.target.value })}
        />
        <Input
          placeholder="Game Price (€)"
          type="text"
          value={inputs.current_price}
          border={"1px solid #ffffff7d"}
          color={"white"}
          onChange={(e) =>
            setInputs({ ...inputs, current_price: e.target.value })
          }
        />
        <Button w={"full"} onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </BlueContainer>
  );
};

export default AddGamePage;
