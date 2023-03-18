import { Box, Button, Heading, Text, Image } from "@chakra-ui/react";
import { Steps } from "intro.js-react";
import { useState } from "react";

interface ToolbarMenuProps {
    visible: boolean;
}

const INTRO_STEPS = [
    {
        element: '#desktop',
        intro: 'This is the desktop, you can find common applications here',
        position: 'right',
        tooltipClass: 'myTooltipClass',
        highlightClass: 'myHighlightClass',
    },
    {
        element: '#toolbar',
        intro: "The taskbar is where you can access both pinned and currently opened applications",
    },
    {
        element: '#toolbar',
        intro: "A dot at the bottom of an app's icon indicates that it is currently open",
    },
    {
        element: '#finder',
        intro: 'This is the finder where you can find common shortcut and contact information',
    },
    {
        element: '#education',
        intro: 'You can view my education here',
    },
    {
        element: '#experiences',
        intro: 'You can view my experiences here',
    },
    {
        element: '#about',
        intro: 'You can view my common information here',
    },
    {
        intro: 'That concludes the introduction. I hope you found it enjoyable.',
    },
];

export default function ToolbarMenu({ visible }: ToolbarMenuProps) {
    const [stepsEnabled, setStepsEnabled] = useState(false);

    return <Box
        height={200}
        position="fixed"
        display="flex"
        justifyContent="center"
        left={0}
        right={0}
        bottom={90}
        zIndex={99999}
    >
        <Steps
            enabled={stepsEnabled}
            steps={INTRO_STEPS}
            initialStep={0}            
            onExit={() => setStepsEnabled(false)}
        />
        <Box
            width="400px"
            height="100%"
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
            backdropFilter="blur(5em)"
            border="1px solid rgba(255, 255, 255, 0.3)"
            maxWidth="300px"
            borderRadius="15px"
            padding={20}
            transform={visible ? "translateY(0)" : "translateY(500px)"}
            transition="all 0.5s"
        >
            <Box color="#fff">
                <Box display="flex" alignItems="center" marginBottom={10}>
                    <Box padding={5} borderRadius={10} background="rgba(255, 255, 255, 0.9)" width="45px" height="45px">
                        <Image src="/menu.svg" width="35px" height="35px" alt="Menu icon" />
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
                        setStepsEnabled(true)
                    }}
                >
                    Show me around
                </Button>
            </Box>
        </Box >
    </Box>
}