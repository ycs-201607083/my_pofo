import { Box, Stack } from "@chakra-ui/react";
import { Navbar } from "../../components/root/Navbar.jsx";
import MainImage from "../MainImage.jsx";
import AboutMe from "../AboutMe.jsx";
import Skills from "../Skills.jsx";

export function RootLayout() {
  return (
    <Stack>
      <Box bgColor={"white"}>
        <Navbar />
        <MainImage />
        <AboutMe />
        <Skills />
      </Box>
    </Stack>
  );
}
