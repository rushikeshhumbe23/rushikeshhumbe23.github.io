import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

function Resume() {
  return (
    <Link to="https://drive.google.com/file/d/1dS82bx7pu_STR236_C74fybEXqqJln6p/view?usp=sharing">
      <Button>Resume</Button>
    </Link>
  );
}

export default Resume;
