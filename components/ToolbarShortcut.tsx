import { Box, Button, Image } from "@chakra-ui/react";

interface ToolbarShortcutProps {
  id?: string;
  title: string;
  icon: string;
  selected: boolean;
  onClick?: () => void;
}

export function ToolbarShortcut({ id, title, icon, selected, onClick }: ToolbarShortcutProps) {
  return (
    <Button
      id={id}
      width="45px"
      height="45px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
      backgroundColor="rgba(255, 255, 255, 0.9)"
      border="none"
      outline="none"
      margin={5}
      _active={{
        opacity: 0.9,
      }}
      position="relative"
      onClick={() => {
        onClick && onClick();
      }}
    >
      <Image width="35px" height="35px" src={icon} alt={title} title={title} />
      <Box position="absolute" opacity={selected ? 1 : 0} transition="all 0.5s" bottom={-5} width="10px" height="10px" borderRadius="50%" backgroundColor="#AA77FF" border="1px solid white"></Box>
    </Button>
  );
}
