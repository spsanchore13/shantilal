import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Input,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
  useColorMode,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
// import { HashLink, NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./Navbar.module.css";
import Social from "./Social";
import { Link } from "react-scroll";
import { useRef } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <HStack
        display={["none", "none", "flex"]}
        zIndex={10}
        position="sticky"
        top="0"
        bgColor={isDark ? "gray.800" : "white"}
        borderBottom="1px"
        borderColor="gray.100"
      >
        <Social />
        <Spacer />

        <Flex px="20px" py="5px" align="center">
          <HStack
            w="50vw"
            display="flex"
            justifyContent="space-evenly"
            fontWeight="semibold"
            letterSpacing="3px"
          >
            <Link
              to="home"
              smooth={true}
              duration={1000}
              spy={true}
              // offset={50}
              activeClass={styles.active}
            >
              HOME
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              spy={true}
              // offset={50}
              activeClass={styles.active}
            >
              ABOUT
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={1000}
              spy={true}
              // offset={50}
              activeClass={styles.active}
            >
              SKILLS
            </Link>
            <Link
              to="project"
              smooth={true}
              duration={1000}
              spy={true}
              // offset={50}
              activeClass={styles.active}
            >
              PROJECTS
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              spy={true}
              // offset={-10}
              activeClass={styles.active}
            >
              CONTACT
            </Link>
          </HStack>
          <IconButton
            ml="10px"
            isRound
            icon={isDark ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
          />
        </Flex>
      </HStack>

      <HStack
        py="2px"
        px="10px"
        borderBottom="1px"
        borderColor="gray.100"
        display={["flex", "flex", "none", "none"]}
      >
        <IconButton
          aria-label="Open Menu"
          mr={2}
          size="md"
          onClick={onOpen}
          isRound={true}
          icon={<HamburgerIcon />}
        />
        <Spacer />
        <Social />
        <IconButton
          ml="10px"
          isRound
          icon={isDark ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
        />
      </HStack>

      <Drawer
        size={["xs", "xs"]}
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <VStack align="left" spacing={5}>
              <Link
                to="home"
                smooth={true}
                duration={1000}
                spy={true}
                // offset={50}
                activeClass={styles.active}
              >
                HOME
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                spy={true}
                // offset={50}
                activeClass={styles.active}
              >
                ABOUT
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={1000}
                spy={true}
                // offset={50}
                activeClass={styles.active}
              >
                SKILLS
              </Link>
              <Link
                to="project"
                smooth={true}
                duration={1000}
                spy={true}
                // offset={50}
                activeClass={styles.active}
              >
                PROJECTS
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                spy={true}
                // offset={-10}
                activeClass={styles.active}
              >
                CONTACT
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
