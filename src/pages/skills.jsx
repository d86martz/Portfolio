// import { PDFDownloadLink } from '@react-pdf/renderer';
import PDF from '../../public/assets/documents/CV David Martz.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faNpm } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import "./skills.scss"

export default function Skills() {   
  return (
    <div id="skills">
      <div id="skill-tools">
        <div className="skill">
          <h2>Frontend</h2>
          <ul>
            <li><span><FontAwesomeIcon icon={faHtml5} /></span>HTML</li> 
            <li><span><FontAwesomeIcon icon={faCss3} /></span>CSS</li>
            <li><span><FontAwesomeIcon icon={faSass} /></span>Sass</li>
            <li><span><FontAwesomeIcon icon={faJs} /></span>Javascript</li>
            <li><span><FontAwesomeIcon icon={faReact} /></span>React</li>
          </ul>
        </div>
        <div className="skill">
          <h2>Backend</h2>
          <ul>
              <li><span><FontAwesomeIcon icon={faReact} /></span>React</li>
              <li><span><FontAwesomeIcon icon={faNode} /></span>Node.js</li> 
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
        </div>
        <div className="skill">
          <h2>Outils</h2>
          <ul>
              <li>Visual Studio Code</li>
              <li><span><FontAwesomeIcon icon={faFigma} /></span>FIGMA</li> 
              <li><span><FontAwesomeIcon icon={faNpm} /></span>npm</li>
              <li><span><FontAwesomeIcon icon={faGithub} /></span>Git/GitHub</li>
              <li>Postman</li>
              <li>Swagger</li>
              <li>Lighthouse</li>
              <li>Chrome DevTools</li>
              <li>Wave Evaluation Tool</li>
            </ul>
        </div>
      </div>
      <div id="mycv">
        <Document file={PDF}> 
          <Page pageNumber={1} /> 
        </Document>
          {/* <PDFDownloadLink document={<CV />} fileName="CV David Martz.pdf">
            {({loading}) => (loading ? 'Loading document...' : 'CV David Martz.pdf')}
          </PDFDownloadLink>   */}       
      </div>
    </div>
  );
};