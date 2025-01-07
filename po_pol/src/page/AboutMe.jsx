import React from "react";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaSchool,
  FaUser,
} from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";

// 아이콘을 as 속성으로 전달하는 방식
function Item({ title, content, IconType }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center" // 세로로 중앙 정렬
      justifyContent="center" // 가로로 중앙 정렬
      textAlign="center" // 텍스트도 중앙 정렬
      gap={2} // 아이템 간 간격 설정
    >
      <IconType />
      <Text fontWeight="semibold" textStyle={"xs"}>
        {title}
      </Text>
      <Text textstyle={"xl"}>{content}</Text>
    </Box>
  );
}

function AboutMe(props) {
  const PaddingTop = useBreakpointValue({
    base: "150%", // 작은 화면에서 50%
    sm: "70%",
    md: "50%",
    lg: "35%",
  });

  return (
    <Flex pt={PaddingTop}>
      <Flex gap={5} wrap={"wrap"} justify={"center"}>
        {/* JSX 구문에서 아이콘을 IconType으로 전달 */}
        <Item title={"이름"} content={"김민성"} IconType={FaUser} />
        <Item title={"전화번호"} content={"010-2909-0796"} IconType={FaPhone} />
        <Item
          title={"생년월일"}
          content={"1997.04.10"}
          IconType={FaBirthdayCake}
        />
        <Item
          title={"주소"}
          content={"서울특별시 관악구 미성동"}
          IconType={FaLocationDot}
        />
        <Item
          title={"이메일"}
          content={"nan0805@naver.com"}
          IconType={FaEnvelope}
        />
        <Item
          title={"학력"}
          content={"유한대학교(컴퓨터 소프트웨어학과)"}
          IconType={FaSchool}
        />
      </Flex>
    </Flex>
  );
}

export default AboutMe;
