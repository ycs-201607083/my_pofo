import { useNavigate } from "react-router-dom";
import { Box, Flex, IconButton, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import "../../font/font.css";
import { GiHamburgerMenu } from "react-icons/gi";

function TextItem({ children, ...rest }) {
  return (
    <Box
      css={{ color: "gray.300", fontFamily: "YanoljaFont" }}
      whiteSpace="nowrap"
      _hover={{
        cursor: "pointer",
        color: "white",
      }}
      color={{ base: "black", md: "gray.300" }}
      {...rest}
    >
      {children}
    </Box>
  );
}

function NavItem({ children, ...rest }) {
  return (
    <Box
      css={{ color: "gray.300", fontFamily: "YanoljaFont" }}
      whiteSpace="nowrap"
      _hover={{
        textDecoration: "underline",
        cursor: "pointer",
        color: "white",
      }}
      color={{ base: "white", md: "gray.300" }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Box mb={5}>
      <Flex
        gap={4}
        p={4}
        justify="space-between" // 왼쪽과 오른쪽 아이템 간의 공간을 배분
        alignItems="center"
        bgColor={"blue.500"}
        w="100%"
      >
        <TextItem> KMS's portfolio </TextItem>

        <Flex
          display={{ base: "none", md: "flex" }} // 화면이 작은 경우에는 숨기고, md 이상에서는 표시
          gap={10}
          justifyContent="space-between"
        >
          <NavItem>소개</NavItem>
          <NavItem>기술소개</NavItem>
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
          variant={"subtle"}
        >
          <GiHamburgerMenu />
        </IconButton>
      </Flex>

      {/* 햄버거 메뉴: 화면 크기가 작을 때 나타남 */}
      {isMenuOpen && (
        <VStack
          bg="blue.500"
          p={4}
          spacing={4}
          display={{ base: "flex", md: "none" }}
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
