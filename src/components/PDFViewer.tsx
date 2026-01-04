import { useState } from 'react';
import * as pdfjs from 'pdfjs-dist';
import '../styles/PDFViewer.css';

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfPath: string;
  title: string;
}

export const PDFViewer = ({ pdfPath, title }: PDFViewerProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleDocumentLoadSuccess = (pdf: any) => {
    setTotalPages(pdf.numPages);
    setIsLoading(false);
  };

  const handleDocumentLoadError = (error: any) => {
    setError(`Failed to load PDF: ${error.message}`);
    setIsLoading(false);
  };

  const goToPreviousPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
  };

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = parseInt(e.target.value, 10);
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="pdf-viewer">
      <div className="pdf-header">
        <h2>{title}</h2>
        <a href={pdfPath} download className="pdf-download-btn">
          ⬇️ Download PDF
        </a>
      </div>

      {error && (
        <div className="pdf-error">
          <p>{error}</p>
          <p>The PDF file could not be loaded. You can still download it directly.</p>
        </div>
      )}

      {isLoading && !error && (
        <div className="pdf-placeholder">
          <p>Loading PDF...</p>
        </div>
      )}

      {!error && (
        <>
          <div className="pdf-container">
            <iframe
              src={`${pdfPath}#toolbar=0&navpanes=0`}
              className="pdf-iframe"
              title={`PDF viewer for ${title}`}
              onLoad={() => {
                // Try to get page count from pdf.js
                const xhr = new XMLHttpRequest();
                xhr.open('GET', pdfPath, true);
                xhr.responseType = 'arraybuffer';
                xhr.onload = () => {
                  pdfjs.getDocument(new Uint8Array(xhr.response)).promise.then(
                    pdf => handleDocumentLoadSuccess(pdf),
                    error => handleDocumentLoadError(error)
                  );
                };
                xhr.onerror = () =>
                  setError('Failed to load PDF file. Make sure the PDF exists at the specified path.');
                xhr.send();
              }}
            />
          </div>

          {totalPages > 0 && (
            <div className="pdf-controls">
              <button onClick={goToPreviousPage} disabled={currentPage === 1} className="pdf-btn">
                ← Previous
              </button>
              <div className="pdf-page-info">
                <input
                  type="number"
                  min="1"
                  max={totalPages}
                  value={currentPage}
                  onChange={handlePageInputChange}
                  className="pdf-page-input"
                />
                <span>of {totalPages}</span>
              </div>
              <button onClick={goToNextPage} disabled={currentPage === totalPages} className="pdf-btn">
                Next →
              </button>
            </div>
          )}
        </>
      )}

      <div className="pdf-note">
        <p>
          💡 Tip: Use your browser's built-in PDF controls for zooming, searching, and other features. You can also
          download the PDF to view offline.
        </p>
      </div>
    </div>
  );
};
