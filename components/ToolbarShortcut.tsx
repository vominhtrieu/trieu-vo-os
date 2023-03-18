import { Button, Image } from "@chakra-ui/react";

interface ToolbarShortcutProps {
  title: string;
  icon: string;
}

export function ToolbarShortcut({ title, icon }: ToolbarShortcutProps) {
  return (
    <Button
      width="45px"
      height="45px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
      backgroundColor="rgba(255, 255, 255, 0.9)"
      border="none"
      outline="none"
      margin={5 }
      _active={{
        opacity: 0.9,
      }}
    >
      <Image width="35px" height="35px" src={icon} alt={title} title={title} />
    </Button>
  );
}
