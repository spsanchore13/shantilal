import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./Navbar.module.css";
import Social from "./Social";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  return (
    <HStack
      display={["none", "none", "flex"]}
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.default
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.active : styles.default
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? styles.active : styles.default
            }
          >
            SKILLS
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? styles.active : styles.default
            }
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? styles.active : styles.default
            }
          >
            CONTACT
          </NavLink>
        </HStack>
        <IconButton
          ml="10px"
          isRound
          icon={isDark ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
        />
      </Flex>
    </HStack>
  );
}

export default Navbar;
