import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { FcLike } from "react-icons/fc";

function Footer() {
  return (
    <Stack w="100%" mb="1px" border="1px solid red">
      <Text align="center" fontSize={["sm", "sm", "2xl"]}>
        Made with <Icon boxSize="25px" as={FcLike} /> by spsanchore13
      </Text>
    </Stack>
  );
}

export default Footer;
