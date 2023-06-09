import Head from "next/head";
import { Inter } from "next/font/google";
import { Box } from "@chakra-ui/react";
import Toolbar from "@/components/Toolbar";
import { DesktopShortcut } from "@/components/DesktopShortcut";
import FileManager from "@/components/FileManager";
import { useEffect, useState } from "react";
import PDFViewer from "@/components/PDFViewer";
import SystemContext from "@/contexts/system";
import Education from "@/components/Education";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Header from "@/components/Header";
import 'intro.js/introjs.css';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [maxZIndex, setMaxZIndex] = useState(10);
  const [selectedWindow, setSelectedWindow] = useState<HTMLElement | null>(null);
  const [fileManagerVisible, setFileManagerVisible] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState("");
  const [educationVisible, setEducationVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);

  useEffect(() => {
    if (!selectedWindow) {
      return;
    }
    selectedWindow.style.zIndex = (maxZIndex + 1) + "";
    setMaxZIndex(maxZIndex + 1);
    // eslint-disable-next-line
  }, [selectedWindow]);
  return (
    <SystemContext.Provider value={{
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
    }}>
      <Head>
        <title>Trieu Vo OS</title>
        <meta name="description" content="A software engineer's portfolio presented as a simulated website, mimicking an operating system interface." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <FileManager id="finderWindow" title="File Manager" visible={fileManagerVisible} onClose={() => setFileManagerVisible(false)} />
      <Education id="educationWindow" title="Education" visible={educationVisible} onClose={() => {
        setEducationVisible(false);
      }} />
      <PDFViewer id="pdfViewerWindow" fileUrl={selectedPDF} title="PDF Viewer" visible={selectedPDF.length > 0} onClose={() => {
        setSelectedPDF("");
      }} />
      <About id="aboutWindow" title="About me" visible={aboutVisible} onClose={() => {
        setAboutVisible(false);
      }} />
      <Experiences id="experiencesWindow" title="Experiences" visible={experienceVisible} onClose={() => {
        setExperienceVisible(false);
      }} />
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
        <DesktopShortcut
          title="Finder"
          icon="/file-manager.svg"
          onClick={() => {
            setSelectedWindow(document.getElementById("finderWindow"));
            setFileManagerVisible(true)
          }}
        />
        <DesktopShortcut title="CV" icon="/file.svg" onClick={() => {
          setSelectedWindow(document.getElementById("pdfViewerWindow"));
          setSelectedPDF("/cv.pdf");
        }} />
      </Box>
      <Toolbar />
    </SystemContext.Provider>
  );
}
