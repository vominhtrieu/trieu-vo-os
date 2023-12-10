import { Box, Text, Image, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function SignIn() {
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  if (!visible) {
    return null;
  }

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      background="black"
      fontFamily="'Roboto Mono', monospace"
      fontWeight={200}
      padding={24}
      zIndex={9999998}
      backgroundImage="url('/wallpaper.jpg')"
      backgroundSize="cover"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        gap={10}
      >
        <Image
          src="/Avatar.jpg"
          width="200px"
          height="200px"
          borderRadius="50%"
          alt="Trieu Vo Avatar"
          boxShadow="0px 0px 10px 0px rgba(0,0,0,0.75)"
        />
        <Box
          color="white"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontWeight={600}
            fontSize={32}
            boxShadow="0px 0px 10px 0px rgba(0,0,0,0.75)"
          >
            Trieu Vo
          </Text>
          <Text
            fontSize={18}
            fontWeight="light"
            opacity={0.9}
            boxShadow="0px 0px 10px 0px rgba(0,0,0,0.75)"
          >
            minhtrieuvo600@gmail.com
          </Text>
        </Box>
        <Button
          marginTop={20}
          boxShadow="0px 0px 10px 0px rgba(0,0,0,0.75)"
          background="#121212"
          color="white"
          width={150}
          height={45}
          fontSize={16}
          borderRadius={10}
          border="2px solid #4B4B4B"
          backdropBlur
          cursor="pointer"
          opacity={0.95}
          onClick={() => {
            if (loading) {
              return;
            }
            setLoading(true);
            setTimeout(() => {
              setVisible(false);
            }, 1000);
          }}
          _active={{
            opacity: 0.8,
          }}
        >
          {loading ? "Authorizing..." : "Sign In"}
        </Button>
      </Box>
    </Box>
  );
}
