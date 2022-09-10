import {
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";

function About() {
  const [isNotSmallScreen] = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <Stack border="2px solid tomato">
        <Flex
          justifyContent="space-between"
          direction={isNotSmallScreen ? "row" : "column"}
          p={isNotSmallScreen ? "20" : "10"}
          gap="10px"
        >
          <Flex border="2px solid tomato">
            <Text align="left">
              Passion-driven learner and a web developer with the ability to
              write clean, reusable, optimised code. Skilled and experienced at
              building and maintaining MERN based web applications. Looking
              forward to joining a progressive and challenging work environment.
            </Text>
          </Flex>
          <Flex border="2px solid tomato" justify="start">
            <Flex direction="row" p={4}>
              <Divider
                orientation="vertical"
                borderWidth="1px"
                bgColor="red"
                borderRadius="10px"
              />
              <Container border="1px solid green">
                <Text>Full Stack Web Development</Text>
                <Text>Chakra UI</Text>
              </Container>
            </Flex>
          </Flex>
        </Flex>
      </Stack>
      <HStack h="200px" border="2px solid yellow"></HStack>
    </>
  );
}

export default About;
