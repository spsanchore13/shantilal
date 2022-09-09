import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Img,
  Spacer,
  Stack,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";

function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";
  const [isNotSmallScreen] = useMediaQuery("(min-width: 768px)");
  return (
    <Stack>
      <Flex
        justifyContent="space-between"
        direction={isNotSmallScreen ? "row" : "column"}
        p={isNotSmallScreen ? "32" : "0"}
      >
        <Box>
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
            bgClip="text"
          >
            SHANTILAL PATLIYA
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            Full Stack Web Developer
          </Text>
          <Button mt={5} colorScheme="blue">
            RESUME
            <DownloadIcon ml="8px" />
          </Button>
        </Box>

        <Box>
          <Img
            alignSelf="center"
            borderRadius="full"
            backgroundColor="transparent"
            boxShadow="lg"
            objectFit="cover"
            boxSize="300px"
            src="https://scontent.fjai1-1.fna.fbcdn.net/v/t39.30808-6/285255308_157473410101800_4442239155515215538_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IltUYfXSRAYAX-4Ka2T&_nc_ht=scontent.fjai1-1.fna&oh=00_AT-UIONp8d-V3q0vgmcrw398JSt8KsbNc7Z8MRIAV4gKiA&oe=631F9625"
          />
        </Box>
      </Flex>
    </Stack>
  );
}

export default Home;
