import { Box, Stack } from "@chakra-ui/react";

import Archive from "../page/Archive.jsx";
import { Navbar } from "../components/root/Navbar.jsx";
import MainImage from "../page/MainImage.jsx";
import AboutMe from "../page/AboutMe.jsx";
import Skills from "../page/Skills.jsx";

export function RootLayout() {
  return (
    <Stack>
      <Box bgColor={"white"}>
        <Navbar />
        <MainImage />
        <AboutMe />
        <Skills />
        <Archive />
      </Box>
    </Stack>
  );
}
