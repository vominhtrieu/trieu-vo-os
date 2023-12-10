import SystemContext from "@/contexts/system";
import { Box, Image, Heading, Button } from "@chakra-ui/react";
import { PropsWithChildren, useContext, useEffect, useRef } from "react";

export interface WindowProps {
  id: string;
  icon?: string;
  title: string;
  visible: boolean;
  disableScroll?: boolean;
  onClose: () => void;
}

export default function Window({
  id,
  icon,
  title,
  visible,
  onClose,
  disableScroll = false,
  children,
}: PropsWithChildren<WindowProps>) {
  const header = useRef<HTMLDivElement>(null);
  const windowComponent = useRef<HTMLDivElement>(null);
  const { setSelectedWindow, setToolbarMenuVisible } =
    useContext(SystemContext);

  useEffect(() => {
    if (visible) {
      setToolbarMenuVisible(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  useEffect(() => {
    let listener: any = null;
    const headerRef = header.current;
    if (headerRef) {
      listener = headerRef.addEventListener("mousedown", (e) => {
        if (windowComponent.current) {
          const { clientX, clientY } = e;
          const { offsetLeft, offsetTop } = windowComponent.current;
          const x = clientX - offsetLeft;
          const y = clientY - offsetTop;
          const mouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            windowComponent.current!.style.left = `${clientX - x}px`;
            windowComponent.current!.style.top = `${clientY - y}px`;
          };
          const mouseUp = () => {
            document.removeEventListener("mousemove", mouseMove);
            document.removeEventListener("mouseup", mouseUp);
          };
          document.addEventListener("mousemove", mouseMove);
          document.addEventListener("mouseup", mouseUp);
        }
      });
    }
    return () => {
      if (headerRef && listener !== null) {
        headerRef.removeEventListener("mousedown", listener);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      id={id}
      ref={windowComponent}
      pointerEvents={visible ? "all" : "none"}
      draggable={false}
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      width="100%"
      maxWidth="800px"
      height="400px"
      borderRadius="15px"
      background="white"
      overflow="hidden"
      border="1px solid #202020"
      boxShadow="0 0 10px 0 rgb(0 0 0 / 50%)"
      opacity={visible ? 1 : 0}
      transition="opacity 0.5s ease-in-out"
      onMouseDown={() => {
        setSelectedWindow(windowComponent.current);
      }}
    >
      <Box
        ref={header}
        width="100%"
        height="50px"
        background="#202020"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="0 20px"
        cursor="move"
      >
        <Box display="flex" alignItems="center">
          <Image
            width="35"
            height="35px"
            src={icon || "/file-manager.svg"}
            alt="Icon"
            marginRight={10}
          />
          <Heading color="#fff" fontSize={20}>
            {title}
          </Heading>
        </Box>
        <Button
          background="none"
          border="none"
          outline="none"
          display="flex"
          _active={{ opacity: 0.9 }}
          onClick={onClose}
          _hover={{
            cursor: "pointer",
          }}
        >
          <Image width="20px" src="close.svg" alt="Close" color="white" />
        </Button>
      </Box>
      <Box
        width="100%"
        height="100%"
        overflowY={disableScroll ? "hidden" : "auto"}
        overflowX="hidden"
        paddingBottom="40px"
      >
        {children}
      </Box>
    </Box>
  );
}
