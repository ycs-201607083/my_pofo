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

function SkillFullItem({ getItem, getIcon, titleName }) {
  return (
    <HStack wrap={"wrap"}>
      <SkillItem IconType={getIcon} title={titleName} />
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
  const etc = [{ text: "android", bgColor: "#3dd984" }];

  return (
    <Box
      bgColor={"#a47764"}
      w={"100%"}
      p={"2rem"}
      textAlign="center" // 텍스트도 중앙 정렬
    >
      <TitleText title={"기술"} color={"black"} />
      <Flex justifyContent={"center"} alignItems={"center"} mt={5}>
        <Box bgColor={"#fcf1d0"} borderRadius={"50px"} shadow={"md"} w={"60%"}>
          <Flex p={5} flexDirection="column">
            <SkillFullItem
              getItem={lang}
              getIcon={FaCode}
              titleName={"language"}
            />
            <SkillFullItem
              getItem={fe}
              getIcon={FaFileCode}
              titleName={"frontend"}
            />
            <SkillFullItem
              getItem={be}
              getIcon={FaServer}
              titleName={"backend"}
            />
            <SkillFullItem
              getItem={etc}
              getIcon={FaEllipsis}
              titleName={"etc"}
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Skills;
