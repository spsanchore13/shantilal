import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./Navbar.module.css";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  return (
    <VStack display={["none", "none", "flex"]}>
      <Flex w="100vw" px="10px" py="10px" align="center">
        {/* <Img src="" alt="react-logo" w="45px" h="40px" /> */}

        <Heading fontWeight="semibold" color="cyan.400">
          Shantilal Patliya
        </Heading>
        <Spacer />
        <HStack
          // border="1px solid red"
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
            to="/projcets"
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
    </VStack>
  );
}

export default Navbar;
