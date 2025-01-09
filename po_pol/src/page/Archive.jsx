import React from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { TitleText } from "../components/common/Common.jsx";
import { FaGithub } from "react-icons/fa";
import "../css/ArchiveCss.css";

function Archive(props) {
  return (
    <Box w={"100%"} bgColor={"#343434"}>
      <VStack wrap={"wrap"} p={10} gap={5}>
        <TitleText title={"저장소"} color={"white"} />

        <Flex
          bgColor={"white"}
          h={"100%"}
          borderRadius={"7px"}
          pt={"50px"}
          wrap={"wrap"}
          onClick={() =>
            window.open("https://github.com/ycs-201607083", "_blank")
          }
          css={{ cursor: "pointer" }}
        >
          <VStack>
            <FaGithub size={"50%"} color={"black"} />
            <Text color={"blue.600"}>https://github.com/ycs-201607083</Text>
          </VStack>
        </Flex>
      </VStack>
    </Box>
  );
}

export default Archive;
