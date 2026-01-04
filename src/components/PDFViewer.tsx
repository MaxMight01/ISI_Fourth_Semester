import '../styles/PDFViewer.css';

interface PDFViewerProps {
  pdfPath: string;
  title: string;
}

export const PDFViewer = ({ pdfPath, title }: PDFViewerProps) => {
  return (
    <div className="pdf-viewer">
      <div className="pdf-header">
        <h2>{title}</h2>
        <a href={pdfPath} download className="pdf-download-btn">
          ⬇️ Download PDF
        </a>
      </div>

      <div className="pdf-container">
        <iframe
          src={pdfPath}
          className="pdf-iframe"
          title={`PDF viewer for ${title}`}
        />
      </div>

      {/* <div className="pdf-note">
        <p>
          💡 Tip: Use your browser's built-in PDF controls for zooming, searching, and other features. You can also
          download the PDF to view offline.
        </p>
      </div> */}
    </div>
  );
};
