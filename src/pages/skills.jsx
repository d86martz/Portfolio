import { PDFDownloadLink } from '@react-pdf/renderer';
import CV from "../assets/documents/CV.pdf"
import "./skills.scss"

export default function Skills() {              
    return (
      <div id="skills">
        <div className="skill">
          <h1>Frontend</h1>
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
          <h1>Backend</h1>
          <ul>
              <li>React</li>
              <li>Node.js</li> 
              <li>Express.js</li>
              <li>Mongoose</li>
            </ul>
        </div>
        <div className="skill">
          <h1>Outils</h1>
          <ul>
              <li>Visual Studio</li> 
              <li>npm</li>
              <li>GitHub</li>
              <li>Postman</li>
            </ul>
        </div>
        <div>
            <PDFDownloadLink document={<CV />} fileName="CV David Martz.pdf">
              {({loading}) => (loading ? 'Loading document...' : 'Mon CV.pdf')}
            </PDFDownloadLink>  
      </div>        
    </div>
    );
  };