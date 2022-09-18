import { EmailIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Img,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useColorMode,
  useToast,
  VStack,
} from "@chakra-ui/react";
import myImage from "../Image/spsanchore.jpg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

function Contact() {
  const toast = useToast();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bmljxlc",
        "template_y0zk1ki",
        form.current,
        "3gN69WiObyR6bLZHy"
      )
      .then(
        () => {
          toast({
            title: "Sent",
            description: "We've sent your mail successfully",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        },
        () => {
          toast({
            title: `Fail`,
            isClosable: true,
          });
        }
      );
  };
  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";
  return (
    <Stack
      id="contact"
      p={2}
      fontWeight={isDark ? "thin" : "hairline"}
      letterSpacing="2px"
    >
      <Text fontSize="3xl" align="center">
        CONTACT ME
      </Text>
      <SimpleGrid columns={[1, 1, 2, 2]} spacing="10" py={10}>
        <VStack
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          p={10}
          data-aos="zoom-in"
          spacing={10}
        >
          <Img
            src={myImage}
            alt="img"
            rounded="full"
            boxSize="150px"
            objectFit="cover"
          />
          <Text fontSize="2xl" fontWeight="semibold">
            Shantilal Patliya
          </Text>
          <Text fontSize={["lg", "lg", "2xl", "2xl"]} fontWeight="semibold">
            9784102014
          </Text>
          <Text fontSize={["lg", "lg", "2xl", "2xl"]} fontWeight="semibold">
            shantilalpatliya18@gmail.com
          </Text>

          <SimpleGrid columns={[1, 2, 2, 2]} spacing="10px" w="70%">
            <Button
              onClick={() => window.open("https://wa.me/+919784102014")}
              colorScheme="whatsapp"
              leftIcon={<FaWhatsapp />}
              fontWeight="semibold"
              letterSpacing="2px"
            >
              WhatsApp
            </Button>
            <Button
              onClick={() =>
                window.open("https://www.linkedin.com/in/spsanchore13/")
              }
              colorScheme="linkedin"
              leftIcon={<FaLinkedin />}
              fontWeight="semibold"
              letterSpacing="2px"
            >
              LinkedIn
            </Button>
          </SimpleGrid>
        </VStack>

        <VStack
          spacing={10}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          p="2px"
          py={12}
          data-aos="zoom-in"
        >
          <Text
            align="center"
            fontSize={["lg", "2xl", "3xl", "3xl"]}
            fontWeight="bold"
            pb="10px"
          >
            Send Me Email
          </Text>
          <Container>
            <form ref={form}>
              <FormControl isRequired>
                <FormLabel>Enter Name</FormLabel>
                <Input type="text" name="user_name" mb={5} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="user_email" mb={5} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Enter Your Message</FormLabel>
                <Textarea
                  name="message"
                  // value={value}
                  // onChange={handleInputChange}
                  placeholder="Here is a sample placeholder"
                  size="sm"
                  mb={5}
                />
              </FormControl>
              <Button
                leftIcon={<EmailIcon />}
                variant="outline"
                w="100%"
                _hover={{ backgroundColor: "blue.400" }}
                bgColor="blue.500"
                onClick={sendEmail}
                fontWeight="semibold"
                letterSpacing="2px"
              >
                Send
              </Button>
            </form>
          </Container>
        </VStack>
      </SimpleGrid>
    </Stack>
  );
}

export default Contact;
