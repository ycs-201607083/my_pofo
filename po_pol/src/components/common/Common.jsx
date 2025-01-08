import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import "../../font/font.css";

export function SkillItem({ IconType, title }) {
  return (
    <Flex flexDirection="row" gap={3} alignItems="center" m={5}>
      <IconType style={{ fontSize: "40px", color: "black", padding: 5 }} />
      <Text
        color={"black"}
        style={{ fontFamily: "MoneyFont" }}
        fontWeight={"bold"}
      >
        {title}
      </Text>
    </Flex>
  );
}

export function TitleText({ color, title }) {
  return (
    <Text
      fontSize="6xl"
      fontWeight="bold"
      mb={6}
      color={color}
      css={{ fontFamily: "YanoljaFont" }}
    >
      {title}
    </Text>
  );
}

function Common(props) {
  return <div></div>;
}

export default Common;
