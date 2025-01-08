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

function Skills(props) {
  const lang = [
    { text: "java", bgColor: "#663300" },
    { text: "kotlin", bgColor: "#6667AB" },
  ];
  const fe = ["JSP", "React", "Html5", "Css", "Chakra-ui"];
  const be = ["Spring"];
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
          <HStack wrap={"wrap"}>
            <SkillItem IconType={FaCode} title={"Language"} />
            <SkillStack items={lang} />
          </HStack>
          <SkillItem IconType={FaFileCode} title={"Frontend"} />
          <SkillItem IconType={FaServer} title={"Backend"} />
          <SkillItem IconType={FaEllipsis} title={"etc"} />
        </Flex>
      </Box>
    </Box>
  );
}

export default Skills;
