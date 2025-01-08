import { useNavigate } from "react-router-dom";
import { Box, Flex, IconButton, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../../font/font.css";
import { GiHamburgerMenu } from "react-icons/gi";

function TextItem({ children, ...rest }) {
  return (
    <Box
      css={{ color: "gray.300", fontFamily: "YanoljaFont" }}
      whiteSpace="nowrap"
      _hover={{
        cursor: "pointer",
        color: "black",
      }}
      color={{ base: "black", md: "gray.300" }}
      {...rest}
    >
      {children}
    </Box>
  );
}

//네이게이션 아이템
function NavItem({ children, ...rest }) {
  return (
    <Box
      css={{ color: "#e9ecef", fontFamily: "YanoljaFont" }}
      whiteSpace="nowrap"
      _hover={{
        textDecoration: "underline",
        cursor: "pointer",
        color: "black",
      }}
      color={{ base: "black", md: "gray.300" }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); //크기에 따라 햄버거 메뉴로 표시
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 스크롤 위치 감지
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // 창 크기 변화 감지
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 화면 크기에 따른 기본 배경색 설정
  const navbarBgColor =
    scrollPosition > 1 || windowWidth < 768 ? "white" : "transparent";

  return (
    <Box>
      <Flex
        gap={4}
        p={4}
        justify="space-between" // 왼쪽과 오른쪽 아이템 간의 공간을 배분
        alignItems="center"
        bgColor={navbarBgColor}
        w="100%"
        position="fixed" // 화면에 고정
        transition="background-color 0.3s ease-in-out" // 부드러운 전환 효과
      >
        <TextItem> KMS's portfolio </TextItem>

        <Flex
          display={{ base: "none", md: "flex" }} // 화면이 작은 경우에는 숨기고, md 이상에서는 표시
          gap={10}
          justifyContent="space-between"
        >
          <NavItem>소개</NavItem>
          <NavItem>기술</NavItem>
          <NavItem>저장소</NavItem>
          <NavItem>프로젝트</NavItem>
        </Flex>

        {/* 햄버거 메뉴 아이콘 */}
        <IconButton
          aria-label="메뉴 열기"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          display={{ md: "none" }} // 화면이 작은 경우에만 햄버거 메뉴를 표시
          variant={"ghost"}
        >
          <GiHamburgerMenu />
        </IconButton>
      </Flex>

      {/* 햄버거 메뉴: 화면 크기가 작을 때 나타남 */}
      {isMenuOpen && (
        <VStack
          bg="#e9ecef"
          p={4}
          spacing={4}
          display={{ base: "flex", md: "none" }}
          position="fixed" // 화면에 고정
          top="60px" // Navbar 아래에 위치
          w={"100%"}
        >
          <NavItem>소개</NavItem>
          <NavItem>기술소개</NavItem>
          <NavItem>저장소</NavItem>
          <NavItem>프로젝트</NavItem>
        </VStack>
      )}
    </Box>
  );
}
