import { Box, Stack } from "@chakra-ui/react";
import { Navbar } from "../../components/root/Navbar.jsx";
import MainImage from "../MainImage.jsx";

export function RootLayout() {
  return (
    <Stack>
      <Box position="relative" h="100vh">
        <Navbar />
        <MainImage />
      </Box>
    </Stack>
  );
}
