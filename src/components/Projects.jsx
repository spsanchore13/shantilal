import {
  Box,
  Button,
  ButtonSpinner,
  Container,
  Divider,
  Flex,
  HStack,
  Img,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import bestbuy1 from "../Image/bestbuy1.png";
import pharmeasy1 from "../Image/pharmeasy1.png";
import bathandbody1 from "../Image/bathandbody1.png";
import todo1 from "../Image/todo1.png";
import { LinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Projects() {
  return (
    <Stack
      // border="2px solid red"
      id="project"
      p={[2, 10]}
    >
      <Text fontSize="3xl" align="center" fontWeight="bold">
        Projects
      </Text>
      <SimpleGrid columns={[1, 1, 2, 2]} spacing="40px">
        <VStack
          data-aos="fade-right"
          p={[2, 5]}
          spacing={2}
          borderRadius="10px"
          boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        >
          <Text align="left" fontSize="2xl" fontWeight="semibold">
            Bestbuy Clone
          </Text>
          <Box className="image-container1">
            <Img src={bestbuy1} alt="img" />
          </Box>

          <Text align="left">
            Bestbuy is an american electronics product website
          </Text>
          <HStack>
            <Text color="red.600" fontWeight="bold">
              Text Stack:
            </Text>
            <Text>HTML5</Text>
            <Divider
              orientation="vertical"
              border="2px"
              height="10px"
              bgColor="skyblue"
            />
            <Text>CSS3</Text>
            <Divider
              orientation="vertical"
              bgColor="skyblue"
              border="2px"
              height="10px"
            />
            <Text>JavaScript</Text>
          </HStack>
          <Text>a collobarotive project built in 4 day team lead by me</Text>
          <HStack>
            <Button leftIcon={<FaGithub />} colorScheme="blue" variant="solid">
              Github
            </Button>
            <Button leftIcon={<LinkIcon />} colorScheme="blue" variant="solid">
              Live
            </Button>
          </HStack>
        </VStack>

        <VStack
          data-aos="fade-left"
          spacing={2}
          p={[2, 5]}
          borderRadius="10px"
          boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        >
          <Text fontSize="2xl" fontWeight="semibold">
            Pharmeasy Clone
          </Text>
          <Box className="image-container2">
            <Img src={pharmeasy1} alt="img" />
          </Box>
          <Text>Bestbuy is an american electronics product website</Text>
          <HStack>
            <Text color="red.600" fontWeight="bold">
              Text Stack:
            </Text>
            <Text>HTML5</Text>
            <Divider
              orientation="vertical"
              border="2px"
              height="10px"
              bgColor="skyblue"
            />
            <Text>CSS3</Text>
            <Divider
              orientation="vertical"
              bgColor="skyblue"
              border="2px"
              height="10px"
            />
            <Text>JavaScript</Text>
          </HStack>
          <Text>a collobarotive project built in 4 day team lead by me</Text>
          <HStack>
            <Button leftIcon={<FaGithub />} colorScheme="blue" variant="solid">
              Github
            </Button>
            <Button leftIcon={<LinkIcon />} colorScheme="blue" variant="solid">
              Live
            </Button>
          </HStack>
        </VStack>

        <VStack
          data-aos="fade-right"
          p={[2, 5]}
          spacing={2}
          borderRadius="10px"
          boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        >
          <Text fontSize="2xl" fontWeight="semibold">
            Bathandbodyworks Clone
          </Text>
          <Box className="image-container3">
            <Img src={bathandbody1} alt="img" />
          </Box>
          <Text>Bestbuy is an american electronics product website</Text>
          <HStack>
            <Text color="red.600" fontWeight="bold">
              Text Stack:
            </Text>
            <Text>HTML5</Text>
            <Divider
              orientation="vertical"
              border="2px"
              height="10px"
              bgColor="skyblue"
            />
            <Text>CSS3</Text>
            <Divider
              orientation="vertical"
              bgColor="skyblue"
              border="2px"
              height="10px"
            />
            <Text>JavaScript</Text>
          </HStack>
          <Text>a collobarotive project built in 4 day team lead by me</Text>
          <HStack>
            <Button leftIcon={<FaGithub />} colorScheme="blue" variant="solid">
              Github
            </Button>
            <Button leftIcon={<LinkIcon />} colorScheme="blue" variant="solid">
              Live
            </Button>
          </HStack>
        </VStack>

        <VStack
          data-aos="fade-left"
          p={[2, 5]}
          spacing={2}
          borderRadius="10px"
          boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        >
          <Text fontSize="2xl" fontWeight="semibold">
            Simple Todo Crud Application
          </Text>
          <Box className="image-container4">
            <Img src={todo1} alt="img" />
          </Box>
          <Text>Bestbuy is an american electronics product website</Text>
          <HStack>
            <Text color="red.600" fontWeight="bold">
              Text Stack:
            </Text>
            <Text>HTML5</Text>
            <Divider
              orientation="vertical"
              border="2px"
              height="10px"
              bgColor="skyblue"
            />
            <Text>CSS3</Text>
            <Divider
              orientation="vertical"
              bgColor="skyblue"
              border="2px"
              height="10px"
            />
            <Text>JavaScript</Text>
          </HStack>
          <Text>a collobarotive project built in 4 day team lead by me</Text>
          <HStack>
            <Button leftIcon={<FaGithub />} colorScheme="blue" variant="solid">
              Github
            </Button>
            <Button leftIcon={<LinkIcon />} colorScheme="blue" variant="solid">
              Live
            </Button>
          </HStack>
        </VStack>
      </SimpleGrid>
    </Stack>
  );
}

export default Projects;
