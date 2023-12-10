import { DesktopShortcut } from "@/components/DesktopShortcut";
import SystemContext from "@/contexts/system";
import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { useContext } from "react";
import Window, { WindowProps } from "./Window";

export default function FileManager(props: WindowProps) {
  const { setFileManagerVisible, setSelectedPDF, setSelectedWindow } = useContext(SystemContext);
  return (
    <Window {...props} onClose={() => {
      console.log(props);
      setFileManagerVisible(false);
    }}>
      <Box display="flex" flexWrap="wrap">
        <DesktopShortcut title="CV.pdf" icon="/file.svg" textColor="black" onClick={() => {
          setSelectedWindow(document.getElementById("pdfViewerWindow"));
          setSelectedPDF("/CV.pdf")
        }} />
        <DesktopShortcut title="Gmail" icon="/gmail.svg" textColor="black" onClick={() => {
          window.open("mailto:minhtrieuvo600@gmail.com");
        }} />
        <DesktopShortcut title="LinkedIn" icon="/linkedin.svg" textColor="black" onClick={() => {
          window.open("https://www.linkedin.com/in/vominhtrieu/");
        }} />
        <DesktopShortcut title="Github" icon="/github.svg" textColor="black" onClick={() => {
          window.open("https://www.github.com/vominhtrieu");
        }} />
      </Box>
    </Window >
  );
}
