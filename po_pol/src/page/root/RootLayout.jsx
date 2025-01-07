import { Box, Stack } from "@chakra-ui/react";
import { Navbar } from "../../components/root/Navbar.jsx";
import MainImage from "../MainImage.jsx";
import AboutMe from "../AboutMe.jsx";

export function RootLayout() {
  return (
    <Stack>
      <Box h="100vh">
        <Navbar />
        <MainImage />
        <AboutMe />
      </Box>
    </Stack>
  );
}
