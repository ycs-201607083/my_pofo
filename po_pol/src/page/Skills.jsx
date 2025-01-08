import React from "react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { SkillItem, TitleText } from "../components/common/Common.jsx";
import { FaCode, FaEllipsis, FaFileCode, FaServer } from "react-icons/fa6";

function SkillStack({ items }) {
  return items.map((item, index) => (
    <Text
      key={index}
      color={"white"}
      style={{
        fontFamily: "MoneyFont",
        fontSize: "20px",
        backgroundColor: item.bgColor, // 배열의 배경색 정보 사용
        padding: "5px",
        borderRadius: "5px", // 모서리를 둥글게
      }}
    >
      {item.text}
    </Text>
  ));
}

function SkillFullItem({ getItem, getIcon }) {
  return (
    <HStack wrap={"wrap"}>
      <SkillItem IconType={getIcon} title={"Language"} />
      <SkillStack items={getItem} />
    </HStack>
  );
}

function Skills(props) {
  const lang = [
    { text: "java", bgColor: "#663300" },
    { text: "kotlin", bgColor: "#6667AB" },
  ];
  const fe = [
    { text: "JSP", bgColor: "#4AA8D8" },
    { text: "React", bgColor: "#87ceeb" },
    { text: "Html5", bgColor: "#ff5500" },
    { text: "Css", bgColor: "#1e90ff" },
    { text: "Chakra-ui", bgColor: "#29beb2" },
  ];
  const be = [{ text: "Spring", bgColor: "#6db33f" }];
  const etc = ["android"];

  return (
    <Box
      bgColor={"#A47764"}
      w={"100%"}
      borderRadius={"5%"}
      p={"2rem"}
      textAlign="center" // 텍스트도 중앙 정렬
    >
      <TitleText title={"기술"} color={"black"} />
      <Box bgColor={"#fcf1d0"} borderRadius={"50px"}>
        <Flex p={5} flexDirection="column">
          <SkillFullItem getItem={lang} getIcon={FaCode} />
          <SkillFullItem getItem={fe} getIcon={FaFileCode} />
          <SkillFullItem getItem={be} getIcon={FaServer} />
          <SkillFullItem getItem={etc} getIcon={FaEllipsis} />
        </Flex>
      </Box>
    </Box>
  );
}

export default Skills;
