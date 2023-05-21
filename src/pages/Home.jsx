import React from "react";
import "../styles/Home.css";
import Profile from "../Images/ProfilePhoto.png";

import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
function Home({ isDarkMode }) {
  const breacksForHome = useBreakpointValue({
    base: "column",
    sm: "column",
    md: "row",
    lg: "row",
    xl: "row",
    xxl: "row",
  });
  const breacksForprofileWidth = useBreakpointValue({
    base: "100%",
    sm: "100%",
    md: "30%",
    lg: "30%",
    xl: "30%",
    xxl: "30%",
  });
  const breacksForInfoWidth = useBreakpointValue({
    base: "100%",
    sm: "100%",
    md: "70%",
    lg: "70%",
    xl: "70%",
    xxl: "70%",
  });
  return (
    <Box
      id="home"
      bgColor={isDarkMode ? "blackAlpha.900" : "gray.100"}
      borderRadius="30px"
      boxShadow={
        isDarkMode
          ? "gray 0px 6px 12px -2px, rgba(255, 255, 255, 0.3) 0px 3px 7px -3px "
          : ""
      }
    >
      <Flex p="30px" flexDir={breacksForHome}>
        <Flex justify="center" align="center" width={breacksForprofileWidth}>
          <Image className="ProfileImage" src={Profile} alt="My Profile" />
        </Flex>
        <Flex width={breacksForInfoWidth} className="homeInfo">
          <Heading color={isDarkMode ? "orange.400" : "blue.400"}>
            Rushikesh Humbe
          </Heading>
          <a href="https://git.io/typing-svg">
            <img
              src={`https://readme-typing-svg.herokuapp.com?font=Bebas+Neue&size=30&duration=4000&pause=1000&color=${
                isDarkMode ? "F77C38" : "blue"
              }&background=06060600&center=true&vCenter=true&width=500&height=100&lines=+Rushikesh+Humbe;Full+Stack+Web+DEveloper`}
              alt="Typing SVG"
            />
          </a>
          <Heading size="20px" color={isDarkMode ? "white" : ""}>
            Full Stack Web Developer
          </Heading>
          <Text color={isDarkMode ? "white" : "black"}>
            A self-motivated, hard-working and ambitious Full Stack Web
            Developer with proficiency in JavaScript and React.Js.
            Problem-solving mindset and the ability to perform well in
            collaboration. Looking forward to working as an accountable and
            competent employee in an exciting tech organization.
          </Text>
          <Flex>
            <FaGithub
              className="socialIcons"
              color={isDarkMode ? "white" : "black"}
              size="2rem"
            />
            <FaLinkedin
              color={isDarkMode ? "white" : "black"}
              className="socialIcons"
              size="2rem"
            />
          </Flex>

          <Link
            to="https://drive.google.com/file/d/1dS82bx7pu_STR236_C74fybEXqqJln6p/view?usp=sharing"
            target="_blank"
            download={true}
          >
            <Button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1dS82bx7pu_STR236_C74fybEXqqJln6p/view?usp=sharing"
                )
              }
              size="sm"
              colorScheme="red"
              _hover={{
                bg: isDarkMode ? "black" : "orange",
                color: isDarkMode ? "" : "white",
              }}
              variant="outline"
              zIndex={0}
            >
              DOWNLOAD RESUME
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Home;
