import { Box, Stack } from "@chakra-ui/react";

import Archive from "../page/Archive.jsx";
import { Navbar } from "../components/root/Navbar.jsx";
import MainImage from "../page/MainImage.jsx";
import AboutMe from "../page/AboutMe.jsx";
import Skills from "../page/Skills.jsx";
import Projects from "../page/Projects.jsx";

export function RootLayout() {
  return (
    <Stack>
      <Box bgColor={"#f5f5f5"}>
        <Navbar />
        <MainImage />
        <AboutMe />
        <Skills />
        <Archive />
        <Projects />
      </Box>
    </Stack>
  );
}
