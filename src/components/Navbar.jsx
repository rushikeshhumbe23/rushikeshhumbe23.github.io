import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import {
  Box,
  Flex,
  Button,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import Dropdown2 from "./Dropdown2";

function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const breackpoitsNav = useBreakpointValue({
    base: "none",
    sm: "none",
    md: "flex",
    lg: "flex",
    xl: "flex",
    xxl: "flex",
  });
  const breackpoitsBurgur = useBreakpointValue({
    base: "flex",
    sm: "flex",
    md: "none",
    lg: "none",
    xl: "none",
    xxl: "none",
  });

  const themeColor = {
    color: "black",
    backgroundColor: "white",
  };
  return (
    <div
      id="nav-menu"
      style={{ position: "sticky", top: "0px", zIndex: "100000" }}
    >
      <Flex
        className={` navbarMain  ${
          isDarkMode ? "navmenu_Dark" : "navmenu_light"
        }`}
      >
        <Heading className={isDarkMode ? "navHello_Dark" : "navHello"}>
          Hello !
        </Heading>
        <Flex>
          <Flex
            className={isDarkMode ? "menubuttonsDark" : "menubuttons"}
            justify={"flex-end"}
            display={breackpoitsNav}
          >
            <Button bgColor="inherit">HOME</Button>
            <Button bgColor="inherit">ABOUT</Button>
            <Button bgColor="inherit">SKILLS</Button>
            <Button bgColor="inherit">PROJECTS</Button>
            <Button bgColor="inherit">CONTACT</Button>

            <Link
              to="https://drive.google.com/file/d/1dS82bx7pu_STR236_C74fybEXqqJln6p/view?usp=sharing"
              target="_blank"
            >
              <Button colorScheme="red" m={"0px 5px"}>
                RESUME
              </Button>
            </Link>
          </Flex>
          <Box display={breackpoitsBurgur}>
            <Button bgColor="inherit" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IoMdClose /> : <IoMdMenu />}
            </Button>
            {isOpen && <Dropdown2 isDarkMode={isDarkMode} />}
          </Box>
          <Button
            _hover={themeColor}
            bgColor="inherit"
            onClick={() => toggleDarkMode()}
          >
            {isDarkMode ? (
              <IoIosSunny className="themeIcon" />
            ) : (
              <IoIosMoon className="themeIcon" />
            )}
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}

export default Navbar;
