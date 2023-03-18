import { Box, Button, Image, Text } from "@chakra-ui/react";

interface DesktopShortcutProps {
  title: string;
  icon: string;
  background?: string;
  textColor?: string;
  onClick?: () => void;
}

const TITLE_MAX_LENGTH = 20;

export function DesktopShortcut({
  title,
  icon,
  background = "rgba(255, 255, 255, 0.9)",
  textColor = "#fff",
  onClick,
}: DesktopShortcutProps) {
  const displayTitle =
    title.length > TITLE_MAX_LENGTH
      ? title.slice(0, TITLE_MAX_LENGTH) + "..."
      : title;
  return (
    <Button
      display="flex"
      background="none"
      justifyContent="center"
      alignItems="center"
      border="none"
      outline="none"
      flexDirection="column"
      width="60px"
      margin="20px 10px"
      _active={{
        opacity: 0.9,
      }}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <Box
        width="45px"
        height="45px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="10px"
        background={background}
        marginBottom={5}
      >
        <Image
          width="35px"
          height="35px"
          src={icon}
          alt={title}
          title={title}
        />
      </Box>
      <Text color={textColor}>{displayTitle}</Text>
    </Button>
  );
}
