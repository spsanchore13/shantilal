import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

function About() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";
  const [isNotSmallScreen] = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <Stack id="about" py={10} justify="center" align="center">
        <Text fontSize="3xl" align="center">
          ABOUT
        </Text>
        <SimpleGrid
          columns={[1, 1, 2, 2]}
          p={10}
          spacing={10}
          // border="1px solid red"
          w={["100%", "100%", "80%", "80%"]}
        >
          <Flex>
            <Text
              align="left"
              fontSize={["lg", "xl"]}
              fontWeight={isDark ? "thin" : "semibold"}
            >
              Passion-driven learner and a web developer with the ability to
              write clean, reusable, optimised code. Skilled and experienced at
              building and maintaining MERN based web applications. Looking
              forward to joining a progressive and challenging work environment.
            </Text>
          </Flex>
          <Flex justify="start" w={["100%", "100%"]}>
            <Flex direction="row">
              <Divider
                orientation="vertical"
                borderWidth="1px"
                bgColor={isDark ? "gray.200" : "gray.500"}
                borderRadius="10px"
              />
              <VStack spacing="10px">
                <Container>
                  <Text
                    fontSize={["md", "xl"]}
                    casing="capitalize"
                    fontWeight={isDark ? "thin" : "semibold"}
                  >
                    Full Stack Web Development ( Full Time )
                  </Text>
                  <Text color={isDark ? "gray.200" : "gray.500"}>
                    Masai School Bengluru
                  </Text>
                </Container>
                <Container>
                  <Text
                    fontSize={["md", "xl"]}
                    casing="capitalize"
                    fontWeight={isDark ? "thin" : "semibold"}
                  >
                    computer science and engineering ( b.tech )
                  </Text>
                  <Text color={isDark ? "gray.200" : "gray.500"}>RTU Kota</Text>
                </Container>
                <Container>
                  <Text
                    fontSize={["md", "xl"]}
                    fontWeight={isDark ? "thin" : "semibold"}
                  >
                    12 <Text as="sup">th</Text> - PCM
                  </Text>
                  <Text color={isDark ? "gray.200" : "gray.500"}>
                    GVM Sanchore
                  </Text>
                </Container>
              </VStack>
            </Flex>
          </Flex>
        </SimpleGrid>
        <HStack w="100%" justify="center" p={10}>
          <GitHubCalendar username="spsanchore13" />
        </HStack>
        <HStack p={2} justify="center">
          <SimpleGrid columns={[1, 1, 2, 2]} spacing={5}>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-1.svg"
                alt="icon"
              />
              <Text>1200+ Hours Practical Coding</Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-2.svg"
                alt="icon"
              />
              <Text>300 Hours Data Structures & Algorithms</Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-3.svg"
                alt="icon"
              />
              <Text>100+ Hours Soft Skill Development</Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-4.svg"
                alt="icon"
              />
              <Text>100+ Hours Math & Logic</Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-5.svg"
                alt="icon"
              />
              <Text>80 Mini Projects</Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-6.svg"
                alt="icon"
              />
              <Text>10+ Projects </Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                rounded="10px"
                src="https://git-scm.com/images/logos/logomark-orange@2x.png"
                alt="git-commit"
              />
              <Text>120+ Git Commits</Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                rounded="10px"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="git-commit"
              />
              <Text>220+ Contributions in the last year</Text>
            </HStack>
          </SimpleGrid>
        </HStack>
      </Stack>
    </>
  );
}

export default About;