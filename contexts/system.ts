import { createContext } from "react";

interface SystemContextType {
    maxZIndex: number;
    setMaxZIndex: (zIndex: number) => void;
    fileManagerVisible: boolean;
    setFileManagerVisible: (open: boolean) => void;
    selectedPDF: string;
    setSelectedPDF: (pdf: string) => void;
    aboutVisible: boolean;
    setAboutVisible: (open: boolean) => void;
    educationVisible: boolean;
    setEducationVisible: (open: boolean) => void;
    experienceVisible: boolean;
    setExperienceVisible: (open: boolean) => void;
}

const SystemContext = createContext<SystemContextType>({
    maxZIndex: 1000,
    setMaxZIndex: () => { },
    fileManagerVisible: false,
    setFileManagerVisible: () => { },
    selectedPDF: "",
    setSelectedPDF: () => { },
    aboutVisible: false,
    setAboutVisible: () => { },
    educationVisible: false,
    setEducationVisible: () => { },
    experienceVisible: false,
    setExperienceVisible: () => { },
});

export default SystemContext;