import { Box, Stack } from "@chakra-ui/react";

import Archive from "../page/Archive.jsx";
import { Navbar } from "../components/root/Navbar.jsx";
import MainImage from "../page/MainImage.jsx";
import AboutMe from "../page/AboutMe.jsx";
import Skills from "../page/Skills.jsx";
import Projects from "../page/Projects.jsx";
import { useRef } from "react";

export function RootLayout() {
  const refs = {
    aboutMe: useRef(null),
    skills: useRef(null),
    archive: useRef(null),
    projects: useRef(null),
  };
  return (
    <Stack>
      <Box bgColor={"#f5f5f5"}>
        <Navbar refs={refs} />
        <MainImage />
        <Box ref={refs.aboutMe}>
          <AboutMe />
        </Box>
        <Box ref={refs.skills}>
          <Skills />
        </Box>
        <Box ref={refs.archive}>
          <Archive />
        </Box>
        <Box ref={refs.projects}>
          <Projects />
        </Box>
      </Box>
    </Stack>
  );
}
