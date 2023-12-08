import { Link } from "@chakra-ui/react";

const LinkButton = ({ text, target }) => {
  return (
    <Link
      href={target}
      target="_blank"
      py={3}
      px={4}
      bg={"#445deb"}
      border={"1px solid #9aa8fc"}
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
