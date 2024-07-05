import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
const PDFViewer = () => {
 const pdfURL = '../assets/documents/CV David Martz.pdf';
 pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
return (
 <div>
    <Document file={pdfURL}>
    <Page pageNumber={1} />
    </Document>
 </div>
 );
};
export default PDFViewer;