import { Download, FileText } from 'lucide-react';
import '../styles/PDFViewer.css';

interface PDFViewerProps {
  pdfPath: string;
  title: string;
}

export const PDFViewer = ({ pdfPath, title }: PDFViewerProps) => {
  return (
    <div className="pdf-viewer">
      <div className="pdf-header">
        <div className="pdf-title-group">
          <div className="pdf-icon">
            <FileText size={22} strokeWidth={2.5} />
          </div>
          <h2>{title}</h2>
        </div>
        <a href={pdfPath} download className="pdf-download-btn">
          <Download size={18} />
          <span>Download PDF</span>
        </a>
      </div>

      <div className="pdf-container">
        <iframe
          src={pdfPath}
          className="pdf-iframe"
          title={`PDF viewer for ${title}`}
        />
      </div>
    </div>
  );
};
