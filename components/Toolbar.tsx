import { ToolbarShortcut } from "@/components/ToolbarShortcut";
import SystemContext from "@/contexts/system";
import { Box } from "@chakra-ui/react";
import { useContext, useState } from "react";
import ToolbarMenu from "./ToolbarMenu";
import Music from "@/components/Music";

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
    setSelectedWindow,
  } = useContext(SystemContext);
  const context = useContext(SystemContext);

  return (
    <>
      <ToolbarMenu visible={context.toolbarMenuVisible} />
      <Box
        height="60px"
        position="fixed"
        display="flex"
        justifyContent="center"
        left={0}
        right={0}
        bottom={10}
        zIndex={99999}
        pointerEvents="none"
      >
        <Music />
        <Box
          id="toolbar"
          width="fit-content"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          background="rgba(0, 0, 0, 0.9)"
          border="1px solid rgba(255, 255, 255, 0.3)"
          padding="0"
          borderRadius="15px"
          position="relative"
        >
          <ToolbarShortcut
            title="Menu"
            icon="/Logo.png"
            selected={false}
            onClick={() => {
              context.setToolbarMenuVisible(!context.toolbarMenuVisible);
            }}
          />
          <ToolbarShortcut
            id="finder"
            title="File Manager"
            icon="/file-manager.svg"
            selected={fileManagerVisible}
            onClick={() => {
              setSelectedWindow(document.getElementById("finderWindow"));
              setFileManagerVisible(true);
            }}
          />
          <ToolbarShortcut
            id="education"
            title="Education"
            icon="/education.svg"
            selected={educationVisible}
            onClick={() => {
              setSelectedWindow(document.getElementById("educationWindow"));
              setEducationVisible(true);
            }}
          />
          <ToolbarShortcut
            id="experiences"
            title="Experiences"
            icon="/office-building.svg"
            selected={experienceVisible}
            onClick={() => {
              setSelectedWindow(document.getElementById("experiencesWindow"));
              setExperienceVisible(true);
            }}
          />
          <ToolbarShortcut
            id="about"
            title="About"
            icon="/information.svg"
            selected={aboutVisible}
            onClick={() => {
              setSelectedWindow(document.getElementById("aboutWindow"));
              setAboutVisible(true);
            }}
          />
          <Box
            width={selectedPDF ? "55px" : "0px"}
            overflow="hidden"
            transition="all 1s"
          >
            <ToolbarShortcut
              title="PDF Viewer"
              selected={true}
              icon="/pdf.svg"
              onClick={() => {
                setSelectedWindow(document.getElementById("pdfViewerWindow"));
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
