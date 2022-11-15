import {
  Box,
  Button,
  HStack,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import bestbuy1 from "../Image/bestbuy1.png";
import pharmeasy1 from "../Image/pharmeasy1.png";
import bathandbody1 from "../Image/bathandbody1.png";
import bettermart1 from "../Image/bettermart1.png";

import { LinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

function Projects() {
  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";
  return (
    <Stack
      // border="1px solid red"
      id="project"
      p={[2, 10]}
      maxWidth="100vw"
      fontWeight={isDark ? "thin" : "hairline"}
      letterSpacing="2px"
    >
      <Text
        // border="1px solid red"
        fontSize="3xl"
        align="center"
        fontWeight="bold"
      >
        PROJECTS
      </Text>
      <SimpleGrid
        columns={[1, 1, 2, 2]}
        spacing="40px"
        //  border="1px solid red"
      >
        <VStack
          // data-aos="zoom-in-left"
          p={[2, 5]}
          spacing={2}
          borderRadius="10px"
          boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        >
          <Text fontSize="2xl" fontWeight="semibold" casing="uppercase">
            BETTRTMART ECOMMERCE
          </Text>
          <Box className="image-container4">
            <Img src={bettermart1} alt="img" h="250px" />
          </Box>

          <VStack spacing={3} align="left">
            <Text align="left">
              Bettermart is an ecommerce platform from that sells dresses shoes
              and many more things
            </Text>
            <HStack>
              <Text color="red.400" fontWeight="bold">
                Text Stack:
              </Text>
              <Text>React,</Text>
              <Text>Redux,</Text>
              <Text>Chakra-UI,</Text>
              <Text>Express js,</Text>
              <Text>Mongo DB</Text>
            </HStack>
            <Text>Collobarotive project built in 4 day team lead by me</Text>
            <HStack>
              <Button
                leftIcon={<FaGithub />}
                colorScheme="blue"
                variant="solid"
                onClick={() =>
                  window.open(
                    "https://github.com/spsanchore13/spicy-muscle-8472"
                  )
                }
              >
                Github
              </Button>
              <Button
                leftIcon={<LinkIcon />}
                colorScheme="blue"
                variant="solid"
                onClick={() =>
                  window.open("https://bettermart-eight.vercel.app/")
                }
              >
                Live
              </Button>
            </HStack>
          </VStack>
        </VStack>
        <VStack
          // data-aos="fade-left"
          spacing={2}
          p={[2, 5]}
          borderRadius="10px"
          boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        >
          <Text fontSize="2xl" fontWeight="semibold" casing="uppercase">
            Pharmeasy Clone
          </Text>
          <Box className="image-container2">
            <Img src={pharmeasy1} alt="img" h="250px" />
          </Box>

          <VStack spacing={3} align="left">
            <Text align="left">
              PharmEasy is an Indian e-pharmacy company that sells medicines,
              diagnostics and telehealth online.
            </Text>
            <HStack>
              <Text color="red.400" fontWeight="bold">
                Text Stack:
              </Text>
              <Text>HTML5,</Text>
              <Text>CSS3,</Text>
              <Text>JavaScript</Text>
            </HStack>
            <Text>Collobarotive project built in 4 day team lead by me</Text>
            <HStack>
              <Button
                leftIcon={<FaGithub />}
                colorScheme="blue"
                variant="solid"
                onClick={() =>
                  window.open("https://github.com/spsanchore13/naive-cast-183")
                }
              >
                Github
              </Button>
              <Button
                leftIcon={<LinkIcon />}
                colorScheme="blue"
                variant="solid"
                onClick={() =>
                  window.open("https://naive-cast-183.vercel.app/")
                }
              >
                Live
              </Button>
            </HStack>
          </VStack>
        </VStack>
        <VStack
          // data-aos="fade-right"
          p={[2, 5]}
          spacing={2}
          borderRadius="10px"
          boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        >
          <Text
            align="left"
            fontSize="2xl"
            fontWeight="semibold"
            casing="uppercase"
          >
            Bestbuy Clone
          </Text>
          <Box className="image-container1" h="250px">
            <Img src={bestbuy1} alt="img" />
          </Box>

          <VStack spacing={3} align="left">
            <Text align="left">
              Best Buy Co. Inc. is an American multinational consumer
              electronics retailer
            </Text>
            <HStack>
              <Text color="red.400" fontWeight="bold">
                Text Stack:
              </Text>
              <Text>HTML5,</Text>

              <Text>CSS3,</Text>

              <Text>JavaScript</Text>
            </HStack>
            <Text>Collobarotive project built in 4 day team lead by me</Text>
            <HStack>
              <Button
                leftIcon={<FaGithub />}
                colorScheme="blue"
                variant="solid"
                onClick={() =>
                  window.open("https://github.com/Therobo77/BESTBUY.COM")
                }
              >
                Github
              </Button>
              <Button
                leftIcon={<LinkIcon />}
                colorScheme="blue"
                variant="solid"
                onClick={() => window.open("https://bestbuy-alpha.vercel.app/")}
              >
                Live
              </Button>
            </HStack>
          </VStack>
        </VStack>

        <VStack
          // data-aos="fade-right"
          p={[2, 5]}
          spacing={2}
          borderRadius="10px"
          boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        >
          <Text fontSize="2xl" fontWeight="semibold" casing="uppercase">
            Bathandbodyworks Clone
          </Text>
          <Box className="image-container3" h="250px">
            <Img src={bathandbody1} alt="img" />
          </Box>

          <VStack spacing={3} align="left">
            <Text align="left">
              Bathandbodyworks is an bodycare and fragrance product website
            </Text>
            <HStack>
              <Text color="red.400" fontWeight="bold">
                Text Stack:
              </Text>
              <Text>React,</Text>

              <Text>Chakra-Ui,</Text>

              <Text>Json-Server</Text>
            </HStack>
            <Text>Solo project built in 4 day by me</Text>
            <HStack>
              <Button
                leftIcon={<FaGithub />}
                colorScheme="blue"
                variant="solid"
                onClick={() =>
                  window.open(
                    "https://github.com/spsanchore13/protective-recess-3139"
                  )
                }
              >
                Github
              </Button>
              <Button
                leftIcon={<LinkIcon />}
                colorScheme="blue"
                variant="solid"
                onClick={() =>
                  window.open("https://protective-recess-3139.vercel.app/")
                }
              >
                Live
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </SimpleGrid>
    </Stack>
  );
}

export default Projects;
