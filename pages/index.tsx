import Head from "next/head";
import { Inter } from "next/font/google";
import { Box } from "@chakra-ui/react";
import Toolbar from "@/components/Toolbar";
import { DesktopShortcut } from "@/components/DesktopShortcut";
import FileManager from "@/components/FileManager";
import { useEffect, useMemo, useState } from "react";
import PDFViewer from "@/components/PDFViewer";
import SystemContext from "@/contexts/system";
import Education from "@/components/Education";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Header from "@/components/Header";
import "intro.js/introjs.css";
import StartingUp from "@/components/StartingUp";
import SignIn from "@/components/SignIn";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [maxZIndex, setMaxZIndex] = useState(10);
  const [selectedWindow, setSelectedWindow] = useState<HTMLElement | null>(
    null
  );
  const [fileManagerVisible, setFileManagerVisible] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState("");
  const [educationVisible, setEducationVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [toolbarMenuVisible, setToolbarMenuVisible] = useState(false);
  const contextValue = useMemo(
    () => ({
      maxZIndex,
      setMaxZIndex,
      selectedWindow,
      setSelectedWindow,
      fileManagerVisible,
      setFileManagerVisible,
      selectedPDF,
      setSelectedPDF,
      aboutVisible,
      setAboutVisible,
      educationVisible,
      setEducationVisible,
      experienceVisible,
      setExperienceVisible,
      toolbarMenuVisible,
      setToolbarMenuVisible,
    }),
    [
      maxZIndex,
      selectedWindow,
      fileManagerVisible,
      selectedPDF,
      aboutVisible,
      educationVisible,
      experienceVisible,
      toolbarMenuVisible,
    ]
  );

  useEffect(() => {
    if (!selectedWindow) {
      return;
    }
    selectedWindow.style.zIndex = maxZIndex + 1 + "";
    setMaxZIndex(maxZIndex + 1);
    // eslint-disable-next-line
  }, [selectedWindow]);
  return (
    <SystemContext.Provider value={contextValue}>
      <Head>
        <title>Trieu Vo OS</title>
        <meta
          name="description"
          content="A software engineer's portfolio presented as a simulated website, mimicking an operating system interface."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Box
        width="100vw"
        height="100vh"
        position="fixed"
        top="0"
        left="0"
        onClick={() => {
          setToolbarMenuVisible(false);
        }}
      ></Box>
      <FileManager
        id="finderWindow"
        title="File Manager"
        visible={fileManagerVisible}
        onClose={() => setFileManagerVisible(false)}
      />
      <Education
        id="educationWindow"
        title="Education"
        visible={educationVisible}
        onClose={() => {
          setEducationVisible(false);
        }}
      />
      <PDFViewer
        id="pdfViewerWindow"
        fileUrl={selectedPDF}
        title="PDF Viewer"
        visible={selectedPDF.length > 0}
        onClose={() => {
          setSelectedPDF("");
        }}
      />
      <About
        id="aboutWindow"
        title="About me"
        visible={aboutVisible}
        onClose={() => {
          setAboutVisible(false);
        }}
      />
      <Experiences
        id="experiencesWindow"
        title="Experiences"
        visible={experienceVisible}
        onClose={() => {
          setExperienceVisible(false);
        }}
      />
      <Box
        id="desktop"
        width="100vw"
        height="100vh"
        padding="15px"
        paddingTop="50px"
        overflow="hidden"
        backgroundImage="url('/wallpaper.jpg')"
        backgroundSize="cover"
        backgroundPosition="top"
      >
        <StartingUp />
        <SignIn />
        <DesktopShortcut
          title="Finder"
          icon="/file-manager.svg"
          onClick={() => {
            setSelectedWindow(document.getElementById("finderWindow"));
            setFileManagerVisible(true);
          }}
        />
        <DesktopShortcut
          title="CV.pdf"
          icon="/file.svg"
          onClick={() => {
            setSelectedWindow(document.getElementById("pdfViewerWindow"));
            setSelectedPDF("/CV.pdf");
          }}
        />
      </Box>
      <Toolbar />
    </SystemContext.Provider>
  );
}
