import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { faPhone } from '@fortawesome/fontawesome-free-solid';


import "./footer.scss"                                      

const Footer = () => {                                      
  return (                                                  
    <footer>
      <h3>ME CONTACTER :</h3>
        <ul>
          <li>
            <Link to="tel:+33617682991"><FontAwesomeIcon icon={faPhone} /> + 33 6 17 68 29 91</Link>
          </li>
          <li>
            <Link to="mailto:d86.martz@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> d86.martz@gmail.com</Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/david-martz-2a090a253" target="_blank">Linked <FontAwesomeIcon id="inIcon" icon={faLinkedin} /></Link>
          </li>
        </ul>                                            
    </footer>
  );
};

export default Footer;                                      
