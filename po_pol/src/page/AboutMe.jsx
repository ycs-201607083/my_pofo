import React from "react";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import {
  FaCalendar,
  FaEnvelope,
  FaLocationDot,
  FaPen,
  FaPhone,
  FaUser,
} from "react-icons/fa6";
import "../../src/font/font.css";
import { TitleText } from "../components/common/Common.jsx";

// 아이콘을 as 속성으로 전달하는 방식
function Item({ title, content, IconType, flexBasis }) {
  return (
    <Box
      css={{ fontFamily: "WantedFont" }}
      display="flex"
      flexDirection="column"
      alignItems="center" // 세로로 중앙 정렬
      justifyContent="center" // 가로로 중앙 정렬
      textAlign="center" // 텍스트도 중앙 정렬
      gap={2} // 아이템 간 간격 설정
      flexBasis={flexBasis || "30%"} // 기본적으로 30% 너비
    >
      <IconType style={{ fontSize: "40px", color: "black" }} />
      <Text textStyle={"xs"} color={"black"}>
        {title}
      </Text>
      <Text fontWeight={"bold"} textStyle={"xs"} color={"black"}>
        {content}
      </Text>
    </Box>
  );
}

function AboutMe(props) {
  const PaddingTop = useBreakpointValue({
    base: "5%", // 작은 화면에서 50%
    /*  sm: "90%",
      md: "55%",
      lg: "10%",*/
  });

  return (
    <Flex
      p={"2rem"}
      direction="column"
      pt={PaddingTop}
      justify={"center"}
      align={"center"}
    >
      <TitleText title={"소개"} color={"black"} />

      <Flex gap={5} wrap={"wrap"} justify={"center"}>
        {/* JSX 구문에서 아이콘을 IconType으로 전달 */}
        <Item title={"이름"} content={"김민성"} IconType={FaUser} />
        <Item title={"전화번호"} content={"010-2909-0796"} IconType={FaPhone} />
        <Item title={"생년월일"} content={"1997.04.10"} IconType={FaCalendar} />
        <Item
          title={"주소"}
          content={"서울특별시 관악구"}
          IconType={FaLocationDot}
        />
        <Item
          title={"이메일"}
          content={"nan0805@naver.com"}
          IconType={FaEnvelope}
        />
        <Item
          title={"학력"}
          content={
            <>
              유한대학교
              <br />
              (소프트웨어학과)
            </>
          }
          IconType={FaPen}
        />
      </Flex>
    </Flex>
  );
}

export default AboutMe;
