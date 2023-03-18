import { ToolbarShortcut } from "@/components/ToolbarShortcut";
import { Box } from "@chakra-ui/react";

export default function Toolbar() {
    return (
        <Box
        height="60px"
        position="fixed"
        display="flex"
        justifyContent="center"
        left={0}
        right={0}
        bottom={20}
      >
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backdropFilter="blur(5em)"
          border="1px solid rgba(255, 255, 255, 0.3)"
          maxWidth="800px"
          marginRight="0 20px"
          borderRadius="15px"
          overflow="hidden"
        >
          <ToolbarShortcut title="Menu" icon="/menu.svg" />
          <ToolbarShortcut title="File Manager" icon="/file-manager.svg" />
          <ToolbarShortcut title="About" icon="/information.svg" />
        </Box>
      </Box>
    )
}