import React from "react";
import "../styles/Skills.css";

import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiGithub,
  SiChakraui,
  SiTypescript,
  SiRedux,
  SiReact,
} from "react-icons/si";
import { Box, Flex, Heading, Grid, useBreakpointValue } from "@chakra-ui/react";
function Skills({ isDarkMode }) {
  const iconSize = "6rem";
  const breacksForskills = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
    xl: "repeat(4, 1fr)",
    xxl: "repeat(4, 1fr)",
  });

  return (
    <Box
      id="skills"
      bgColor={isDarkMode ? "blackAlpha.900" : "gray.100"}
      borderRadius="30px"
    >
      <Grid className="mainSkills" templateColumns={breacksForskills}>
        <Flex color={isDarkMode ? "white" : ""} className="Skillcont">
          <SiHtml5 className="skillicon" size={iconSize} />
          <Heading size={"md"}>HTML</Heading>
        </Flex>

        <Flex color={isDarkMode ? "white" : ""} className="Skillcont">
          <SiCss3 className="skillicon" size={iconSize} />
          <Heading size={"md"}>CSS</Heading>
        </Flex>

        <Flex color={isDarkMode ? "white" : ""} className="Skillcont">
          <SiJavascript className="skillicon" size={iconSize} />
          <Heading size={"md"}>JavaScript</Heading>
        </Flex>
        <Flex color={isDarkMode ? "white" : ""} className="Skillcont">
          <SiReact className="skillicon" size={iconSize} />
          <Heading size={"md"}>React</Heading>
        </Flex>
        <Flex color={isDarkMode ? "white" : ""} className="Skillcont">
          <SiRedux className="skillicon" size={iconSize} />
          <Heading size={"md"}>Redux</Heading>
        </Flex>

        <Flex color={isDarkMode ? "white" : ""} className="Skillcont">
          <SiChakraui className="skillicon" size={iconSize} />
          <Heading size={"md"}>Chakra UI</Heading>
        </Flex>

        <Flex color={isDarkMode ? "white" : ""} className="Skillcont">
          <SiTypescript className="skillicon" size={iconSize} />
          <Heading size={"md"}>Typescript</Heading>
        </Flex>
        <Flex color={isDarkMode ? "white" : ""} className="Skillcont">
          <SiGithub className="skillicon" size={iconSize} />
          <Heading size={"md"}>GitHub</Heading>
        </Flex>
      </Grid>
    </Box>
  );
}

export default Skills;
