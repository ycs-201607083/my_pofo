import React from "react";
import { Box, Image } from "@chakra-ui/react";

function MainImage(props) {
  return (
    <Box>
      <Image
        w={"100%"}
        h={"70%"}
        src="src/components/image/portfo.png"
        alt="pf_image"
        position="absolute"
        top="0"
        left="0"
        zIndex="-1" // 이미지를 네비게이션 바 아래에 배치
      />
    </Box>
  );
}

export default MainImage;
