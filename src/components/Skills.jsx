import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
function Skills() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";
  return (
    <Stack py="50px" px="10px">
      <SimpleGrid columns={[2, 3, 4, 5]} spacing={5}>
        <Box align="center">
          <Img
            boxSize="100px"
            src="https://cdn-icons-png.flaticon.com/512/732/732212.png?w=360"
          />
          <Text
            color={isDark ? "gray.200" : "gray.600"}
            p="4"
            fontSize="xl"
            fontWeight="semibold"
          >
            HTML
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="100px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
          />
          <Text
            color={isDark ? "gray.200" : "gray.600"}
            p="4"
            fontSize="xl"
            fontWeight="semibold"
          >
            CSS
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="100px"
            src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
          />
          <Text
            color={isDark ? "gray.200" : "gray.600"}
            p="4"
            fontSize="xl"
            fontWeight="semibold"
          >
            JAVASCRIPT
          </Text>
        </Box>

        <Box align="center">
          <Img
            boxSize="100px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <Text
            color={isDark ? "gray.200" : "gray.600"}
            p="4"
            fontSize="xl"
            fontWeight="semibold"
          >
            REACT
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="100px"
            src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
          />
          <Text
            color={isDark ? "gray.200" : "gray.600"}
            p="4"
            fontSize="xl"
            fontWeight="semibold"
          >
            REDUX
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="100px"
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
          />
          <Text
            color={isDark ? "gray.200" : "gray.600"}
            p="4"
            fontSize="xl"
            fontWeight="semibold"
          >
            FIGMA
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="100px"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          />
          <Text
            color={isDark ? "gray.200" : "gray.600"}
            p="4"
            fontSize="xl"
            fontWeight="semibold"
          >
            GITHUB
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="100px"
            borderRadius="50%"
            src="https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png"
          />
          <Text
            color={isDark ? "gray.200" : "gray.600"}
            p="4"
            fontSize="xl"
            fontWeight="semibold"
          >
            CHAKRA-UI
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="100px"
            src="https://images.credly.com/images/e4e5214a-e9f3-414c-9ebc-d10467a92816/Data_Structures_and_Algorithms.png"
          />
          <Text
            color={isDark ? "gray.200" : "gray.600"}
            p="4"
            fontSize="xl"
            fontWeight="semibold"
          >
            DSA
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  );
}

export default Skills;
