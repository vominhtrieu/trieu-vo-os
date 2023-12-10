import { PoweroffOutlined } from "@ant-design/icons";
import { Box, Button, Heading, Text, Image } from "@chakra-ui/react";
import { Steps } from "intro.js-react";
import { useState } from "react";

interface ToolbarMenuProps {
  visible: boolean;
}

const INTRO_STEPS = [
  {
    element: "#desktop",
    intro: "This is the desktop, you can find common applications here",
    position: "right",
    tooltipClass: "myTooltipClass",
    highlightClass: "myHighlightClass",
  },
  {
    element: "#toolbar",
    intro:
      "The taskbar is where you can access both pinned and currently opened applications",
  },
  {
    element: "#toolbar",
    intro:
      "A dot at the bottom of an app's icon indicates that it is currently open",
  },
  {
    element: "#finder",
    intro:
      "This is the finder where you can find common shortcut and contact information",
  },
  {
    element: "#education",
    intro: "You can view my education here",
  },
  {
    element: "#experiences",
    intro: "You can view my experiences here",
  },
  {
    element: "#about",
    intro: "You can view my common information here",
  },
  {
    intro: "That concludes the introduction. I hope you found it enjoyable.",
  },
];

export default function ToolbarMenu({ visible }: ToolbarMenuProps) {
  const [stepsEnabled, setStepsEnabled] = useState(false);

  return (
    <Box
      position="fixed"
      display="flex"
      justifyContent="center"
      left={0}
      right={0}
      bottom={90}
      zIndex={99999}
      pointerEvents="none"
    >
      <Steps
        enabled={stepsEnabled}
        steps={INTRO_STEPS}
        initialStep={0}
        onExit={() => setStepsEnabled(false)}
      />
      <Box
        width="450px"
        height="100%"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        background="rgba(0, 0, 0, 0.9)"
        border="1px solid rgba(255, 255, 255, 0.3)"
        borderRadius="15px"
        padding={20}
        transform={visible ? "translateY(0)" : "translateY(500px)"}
        transition="all 0.5s"
        pointerEvents="all"
      >
        <Box color="#fff" width="100%">
          <Box display="flex" alignItems="center" marginBottom={10}>
            <Box
              width="45px"
              height="45px"
            >
              <Image
                src="/Logo.png"
                width="45px"
                height="45px"
                alt="Menu icon"
              />
            </Box>
            <Heading marginLeft={10}>Trieu Vo OS</Heading>
          </Box>
          <Text color="rgba(255,255,255,0.8)">
            This is just my portfolio. <br />
            There&apos;re no real <i>Operation System</i> here.
          </Text>
          <Button
            width="100%"
            fontWeight="bold"
            background="white"
            borderRadius={5}
            padding={10}
            color="black"
            border="none"
            outline="none"
            marginTop={10}
            _active={{
              opacity: 0.9,
            }}
            _hover={{
              cursor: "pointer",
            }}
            onClick={() => {
              setStepsEnabled(true);
            }}
          >
            Show me around
          </Button>
          <div
            style={{
              marginTop: 20,
              borderTop: "1px solid rgba(255,255,255,0.4)",
            }}
          />
          <Box
            display="flex"
            alignItems="center"
            width="100%"
            gap={10}
            marginTop={20}
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center" width="100%" gap={10}>
              <Image
                src="/Avatar.jpg"
                width="60px"
                height="60px"
                borderRadius="50%"
                alt="Trieu Vo Avatar"
              />
              <Box>
                <Text fontWeight={600} fontSize={18}>
                  Trieu Vo
                </Text>
                <Text fontSize={14} fontWeight="light" opacity={0.9}>
                  minhtrieuvo600@gmail.com
                </Text>
              </Box>
            </Box>
            <Button
              variant="outline"
              background="transparent"
              color="white"
              display="flex"
              gap={8}
              border="1px solid white"
              padding={8}
              cursor="pointer"
              borderRadius={10}
              transition="background 0.3s"
              _hover={{
                background: "#DC143C",
              }}
              _active={{
                opacity: 0.9,
              }}
            >
              <PoweroffOutlined style={{
                fontSize: 18,
              }} rev={undefined} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
