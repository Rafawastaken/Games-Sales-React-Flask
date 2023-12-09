import { Link } from "@chakra-ui/react";

const LinkButton = ({ text, target }) => {
  return (
    <Link
      href={target}
      target="_blank"
      py={2}
      px={3}
      bg={"#3146be"}
      border={"1px solid #243cc2"}
      rounded={"md"}
      textTransform={"uppercase"}
      fontWeight={"bold"}
      fontSize={14}
      _hover={{
        textDecoration: "none",
        bg: "#334aca",
        transition: "all ease-in-out 0.3s",
      }}
    >
      {text}
    </Link>
  );
};

export default LinkButton;
