import { VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

import "../styles/Navbar.css";

function Dropdown2({ isDarkMode }) {
  return (
    <VStack
      zIndex={100000}
      className={`DropdownMenu ${
        isDarkMode ? "DropdownMenuDark" : "DropdownmenuLight"
      } `}
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
        <Button colorScheme="red">RESUME</Button>
      </Link>
    </VStack>
  );
}

export default Dropdown2;
