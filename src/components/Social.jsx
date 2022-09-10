import { Flex, HStack, Icon, VStack } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Social() {
  return (
    <HStack spacing="10" ml="130px">
      <Icon
        as={FaGithub}
        boxSize="30"
        cursor="pointer"
        onClick={() => window.open("https://www.linkedin.com/in/spsanchore13/")}
      />
      <Icon
        as={FaLinkedinIn}
        boxSize="30"
        cursor="pointer"
        onClick={() => window.open("https://www.linkedin.com/in/spsanchore13/")}
      />
      <Icon
        as={FaGoogle}
        boxSize="30"
        cursor="pointer"
        onClick={() => window.open("https://www.linkedin.com/in/spsanchore13/")}
      />
    </HStack>
  );
}

export default Social;
