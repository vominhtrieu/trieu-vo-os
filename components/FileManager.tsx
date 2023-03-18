import { DesktopShortcut } from "@/components/DesktopShortcut";
import { Box, Button, Heading, Image } from "@chakra-ui/react";

interface FileManagerProps {
  visible: boolean;
}

export default function FileManager({ visible }: FileManagerProps) {
  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      width="100%"
      maxWidth="800px"
      height="400px"
      borderRadius="15px"
      background="white"
      zIndex={999}
      overflow="hidden"
      border="1px solid #202020"
      boxShadow="0 0 10px 0 rgb(0 0 0 / 50%)"
      opacity={visible ? 1 : 0}
      transition="all 1s ease-in-out"
    >
      <Box
        width="100%"
        height="50px"
        background="#202020"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="0 20px"
      >
        <Box display="flex" alignItems="center">
          <Image
            width="35"
            height="35px"
            src="/file-manager.svg"
            marginRight={10}
          />
          <Heading fontSize={20}>File Manager</Heading>
        </Box>
        <Button
          background="none"
          border="none"
          outline="none"
          display="flex"
          _active={{ opacity: 0.9 }}
        >
          <Image width="20px" src="close.svg" alt="Close" color="white" />
        </Button>
      </Box>
      <Box display="flex" flexWrap="wrap">
        <DesktopShortcut title="CV" icon="/file.svg" textColor="black" />
        <DesktopShortcut title="Contact" icon="/file.svg" textColor="black" />
      </Box>
    </Box>
  );
}
