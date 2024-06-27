import { Link } from "react-router-dom";

import "./footer.scss"                                      

const Footer = () => {                                      
  return (                                                  
    <footer>
      <h2>ME CONTACTER</h2>
        <ul>
          <li>
            <Link to="tel:0617682991">06 17 68 29 91</Link>
          </li>
          <li>
            <Link to="mailto:d86.martz@gmail.com">d86.martz@gmail.com</Link>
          </li> 
        </ul>                                            
    </footer>
  );
};

export default Footer;                                      
