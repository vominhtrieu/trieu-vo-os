import { ToolbarShortcut } from "@/components/ToolbarShortcut";
import SystemContext from "@/contexts/system";
import { Box } from "@chakra-ui/react";
import { useContext, useState } from "react";
import ToolbarMenu from "./ToolbarMenu";

export default function Toolbar() {
  const {
    fileManagerVisible,
    aboutVisible,
    setFileManagerVisible,
    setAboutVisible,
    educationVisible,
    setEducationVisible,
    selectedPDF,
    experienceVisible,
    setExperienceVisible,
  } = useContext(SystemContext);
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <ToolbarMenu visible={menuVisible} />
      <Box
        height="60px"
        position="fixed"
        display="flex"
        justifyContent="center"
        left={0}
        right={0}
        bottom={20}
        zIndex={99999}
      >
        <Box
          width="fit-content"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backdropFilter="blur(5em)"
          border="1px solid rgba(255, 255, 255, 0.3)"
          maxWidth="400px"
          marginRight="0 20px"
          borderRadius="15px"
          position="relative"
        >
          <ToolbarShortcut title="Menu" icon="/menu.svg" selected={false} onClick={
            () => setMenuVisible(visible => !visible)
          } />
          <ToolbarShortcut title="File Manager" icon="/file-manager.svg" selected={
            fileManagerVisible
          } onClick={() => {
            setFileManagerVisible(true);
          }} />
          <ToolbarShortcut title="Education" icon="/education.svg" selected={
            educationVisible
          } onClick={() => {
            setEducationVisible(true);
          }} />
          <ToolbarShortcut title="Experiences" icon="/office-building.svg" selected={
            experienceVisible
          } onClick={() => {
            setExperienceVisible(true);
          }} />
          <ToolbarShortcut title="About" icon="/information.svg" selected={
            aboutVisible
          } onClick={() => {
            setAboutVisible(true);
          }} />
          <Box width={selectedPDF ? "55px" : "0px"} overflow="hidden" transition="all 1s">
            <ToolbarShortcut title="PDF Viewer" selected={true} icon="/pdf.svg" />
          </Box>
        </Box>
      </Box>
    </>
  )
}