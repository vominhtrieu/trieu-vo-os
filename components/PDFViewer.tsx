import Window, { WindowProps } from "./Window";

interface PDFViewerProps extends WindowProps {
    fileUrl: string;
}

export default function PDFViewer({fileUrl, ...rest}: PDFViewerProps) {
    return (
        <Window icon="/pdf.svg" {...rest} disableScroll>
            <embed src={fileUrl} width="100%" height="100%" />
        </Window>
    )
}