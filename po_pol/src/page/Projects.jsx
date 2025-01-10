import React from "react";
import { Box, Flex, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { TitleText } from "../components/common/Common.jsx";
import { FaImages } from "react-icons/fa";

function ProjectItemBox({
  title,
  dateAndMember,
  content,
  skills,
  description = [],
}) {
  const colSize = useBreakpointValue({
    base: "100%",
    lg: "40%",
  });
  return (
    <Box
      bgColor={"white"}
      shadow={"md"}
      w={colSize}
      borderRadius={"10px"}
      p={"3"}
    >
      <VStack p={2} align={"start"}>
        <Box bgColor={"#0047AB"} borderRadius={"7px"}>
          <Text p={2} style={{ fontFamily: "NonnoFont" }}>
            {title}
          </Text>
        </Box>
        <Text p={1} style={{ fontFamily: "NonnoFont" }} color={"gray.400"}>
          {dateAndMember}
        </Text>
        <hr
          width={"100%"}
          style={{ borderColor: "gray", borderWidth: "1px" }}
        />
        <Text
          style={{
            fontFamily: "NonnoFont",
            fontWeight: "bold",
            color: "black",
          }}
        >
          {content}
        </Text>
        <Box
          style={{ fontFamily: "WantedFont", fontWeight: "bold" }}
          as="ul"
          listStyleType="circle"
          color={"black"}
          p={5}
        >
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Box>
        <Flex
          css={{ cursor: "pointer" }}
          align={"center"}
          p={1}
          borderColor={"black"}
          borderRadius={"8px"}
          borderWidth={"2px"}
        >
          <FaImages color={"black"} />
          <Text color={"black"} pl={1} style={{ fontFamily: "NonnoFont" }}>
            이미지
          </Text>
        </Flex>
        <Box
          w={"100%"}
          bgColor={"#f9c51D33"}
          borderRadius={"10px"}
          color={"black"}
          borderColor={"#f9c51d"}
          borderWidth={"1px"}
          p={2}
        >
          {skills}
        </Box>
      </VStack>
    </Box>
  );
}

function Projects(props) {
  const directionCol = useBreakpointValue({
    base: "column",
    md: "row",
  });

  const fishing_here = [
    "팀원들이 낚시를 좋아하여 다같이 사용하자는 취지에서 개발",
    "낚시 게시판이 주 목적이므로 게시판 외 구현",
    "kakaoAPI 카카오맵을 활용하여 위치 공유 기능 구현",
    "반응형 웹으로 구현",
  ];

  const kakao_weather_api = [
    "카카오 로그인 구현",
    "카카오맵에 마커를 구현해 현재 위치 또는 지도에 마커를 찍어 날씨 확인 가능",
    "상단바에 지역명을 검색하여 해당 지역으로 이동 및 현재 날씨 확인 가능",
  ];

  const calculator = [
    "Jetpack Compose으로 구현하여 UI/UX 설계",
    "MVVM패턴을 사용해 리컴포즈 되더라도 값을 유지하도록 구현",
    "RoomDB를 사용하여 계산된 값을 저장하고 페이지에서 출력",
    "값이 비었거나 null, NaN의 경우 계산이 되지않고 값을 전달하지 않도록 쿼리 구현",
  ];

  const interval_training = [
    "달리는 시간, 쉬는 시간 설정을 설정 가능하도록 구현",
    "카카오맵 API를 활용하여 지도에 현재위치 및 이동 간 거리 구현",
    "지나간 자리에 위치표시를 남겨 경로 확인",
    "위치 표시 별 거리를 합산, 계산하여 출력",
  ];

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      mt={5}
      wrap={"wrap"}
      w={"100%"}
    >
      <TitleText title={"프로젝트"} color={"black"} />
      <Flex
        direction={directionCol}
        wrap={"wrap"}
        justify="center"
        w={"95%"}
        gap={10}
        pb={50}
      >
        <ProjectItemBox
          title={"낚시 자리요"}
          content={"React와 Spring boot를 활용해 만든 웹 사이트"}
          skills={
            "React, Java, Java script, Spring boot, Chakra UI, Css, REST API"
          }
          dateAndMember={"24.11.26 ~ 24.12.24 (3인 프로젝트)"}
          description={fishing_here}
        />

        <ProjectItemBox
          title={"Kakao API / 기상청 API"}
          content={"카카오API와 기상청API를 사용해보기 위한 네이티브 앱"}
          skills={"Android, Kotlin, REST API"}
          dateAndMember={"24.07.01 ~ 24.07.30 (개인 프로젝트)"}
          description={kakao_weather_api}
        />

        <ProjectItemBox
          title={"공업용 계산기"}
          content={"공업단지에서 일 할 당시 사용하기 위해 네이티브 앱으로 개발"}
          skills={"Android, Kotlin, Jetpack, RoomDB, MVVM"}
          dateAndMember={"24.03.28 ~ 24.06.20 (개인 프로젝트)"}
          description={calculator}
        />

        <ProjectItemBox
          title={"Interval training"}
          content={
            "런닝을 하다가 나에게 필요한 정보만 골라 볼 수 있는 런닝앱을 네이티브 앱으로 개발"
          }
          skills={"Android, Kotlin, 카카오맵API"}
          dateAndMember={"23.08.08 ~ 23.09.04 (개인 프로젝트)"}
          description={interval_training}
        />
      </Flex>
    </Flex>
  );
}

export default Projects;
