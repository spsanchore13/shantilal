import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Img,
  Stack,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import myimg from "../Image/spsanchore.jpg";
import myresume from "../Resume/Shantilal_Resume.pdf";
import Typewriter from "typewriter-effect";
// import { Wave } from "react-animated-text";

function Home() {
  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";
  const [isNotSmallScreen] = useMediaQuery("(min-width: 768px)");
  return (
    <Stack id="home">
      <Flex
        justifyContent="space-between"
        direction={isNotSmallScreen ? "row" : "column"}
        p={isNotSmallScreen ? "32" : "12"}
      >
        <Box>
          <Text fontSize={["xl", "4xl", "5xl", "5xl"]} fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize={["2xl", "5xl", "7xl", "7xl"]}
            fontWeight="bold"
            className="name"
            bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
            bgClip="text"
          >
            SHANTILAL PATLIYA
          </Text>
          {/* <Wave text="SHANTILAL PATLIYA" effect="jump" effectChange={2} /> */}

          {/* <Text color={isDark ? "gray.200" : "gray.500"}>
            Full Stack Web Developer
          </Text> */}
          <Typewriter
            options={{
              strings: [
                "Full Stack Web Developer",
                "Problem Solver",
                "Debugger",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <a href={myresume} download>
            <Button mt={5} mb={5} colorScheme="blue">
              RESUME
              <DownloadIcon ml="8px" />
            </Button>
          </a>
        </Box>

        <Box>
          <Img
            alignSelf="flex-end"
            borderRadius="20px"
            backgroundColor="transparent"
            boxShadow="lg"
            objectFit="cover"
            boxSize="200px"
            src={myimg}
            // src="https://scontent.fjdh3-1.fna.fbcdn.net/v/t39.30808-6/285255308_157473410101800_4442239155515215538_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=a6eaeBMRH10AX_pw12g&_nc_ht=scontent.fjdh3-1.fna&oh=00_AT9xZ4el6QyRybfHXGUR-C6qEGQJu1kzR5GfCqJ51W5PxA&oe=63277F25"
          />
        </Box>
      </Flex>
    </Stack>
  );
}

export default Home;
