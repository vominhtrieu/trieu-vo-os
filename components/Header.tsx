import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function formatNumber(n: number) {
  if (n < 10) {
    return "0" + n;
  }
  return n + "";
}

export default function Header() {
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const weekday = date
        .toLocaleString("default", { weekday: "long" })
        .substring(0, 3);
      const day = date.getDate();
      const month = date
        .toLocaleString("default", { month: "long" })
        .substring(0, 3);
      const hours = formatNumber(date.getHours());
      const minutes = formatNumber(date.getMinutes());
      setDateStr(`${weekday} ${day} ${month} ${hours}:${minutes}`);
    }, 1000);
  }, []);
  return (
    <Box
      width="100vw"
      height="50px"
      position="fixed"
      display="flex"
      justifyContent="center"
      left={0}
      right={0}
      top={0}
      zIndex={99999}
    >
      <Box
        width="100vw"
        height="40px"
        display="flex"
        justifyContent="space-between"
        padding="0 20px"
        alignItems="center"
        background="rgba(0, 0, 0, 0.4)"
        marginRight="0 20px"
        position="relative"
        boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
      >
        <Heading color="white" fontSize="18px" fontWeight="600">
          Trieu Vo OS
          <span
            style={{
              marginLeft: "5px",
              fontSize: "10px",
              fontWeight: "normal",
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            Build 1.0
          </span>
        </Heading>
        <Box display="flex" alignItems="center" gap={15}>
          <Image
            cursor="pointer"
            src="/search.png"
            width="20px"
            height="20px"
            alt="Search icon"
          />
          <Image
            cursor="pointer"
            src="/wifi.png"
            width="20px"
            height="20px"
            alt="Wi-fi icon"
          />
          <Text color="#fff">{dateStr}</Text>
        </Box>
      </Box>
    </Box>
  );
}
