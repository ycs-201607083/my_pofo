import React from "react";
import { Box, Image } from "@chakra-ui/react";

function MainImage(props) {
  return (
    <Box bgColor={"white"}>
      <Image
        w={"100%"}
        h={"70%"}
        src="src/components/image/portfo.png"
        alt="pf_image"
        top="0"
        left="0"
      />
    </Box>
  );
}

export default MainImage;
