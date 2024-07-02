import { PDFDownloadLink } from '@react-pdf/renderer';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import CV from "../assets/documents/CV David Martz.pdf"
import "./skills.scss"

export default function Skills() {              
    return (
      <div id="skills">
        <div className="skill">
          <h2>Frontend</h2>
          <ul>
            <li>HTML</li> 
            <li>CSS</li>
            <li>SASS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>SEO</li>
            
          </ul>
        </div>
        <div className="skill">
          <h2>Backend</h2>
          <ul>
              <li>React</li>
              <li>Node.js</li> 
              <li>Express.js</li>
              <li>Mongoose</li>
              <li>MongoDB</li>
            </ul>
        </div>
        <div className="skill">
          <h2>Outils</h2>
          <ul>
              <li>Visual Studio</li> 
              <li>npm</li>
              <li>Git/GitHub</li>
              <li>Postman</li>
            </ul>
        </div>
        <div>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={CV} />
          </Worker>
          <PDFDownloadLink document={<CV />} fileName="CV David Martz.pdf">
            {({loading}) => (loading ? 'Loading document...' : 'CV David Martz.pdf')}
          </PDFDownloadLink>  
      </div>        
    </div>
    );
  };