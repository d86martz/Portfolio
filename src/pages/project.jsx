import {useLocation, Navigate} from "react-router-dom";
import { Link } from "react-router-dom";
import Carrousel from "../components/carrousel/carrousel"; 
import Collapse from "../components/collapse/collapse"
import ProjectsData from "../datas/projectsData.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import "./project.scss"

export default function Project () {
  const location = useLocation();                                           
  const project = ProjectsData.find((projectData => projectData.id === location.state));
  if (location.state == null) {                                             
    return <Navigate replace to="*" />
  } else {
    const targets = (
      <ul className={"targets-list"}>
        {project.targets.map((target, index) => (
          <li key={index} className="target">{target}</li>
        ))} 
      </ul>
    )
    const resources = (
      <ul className={"resources-list"}>
        {project.resources.map((resource, index) => (
          <li key={index} className="resource">{resource}</li>
        ))} 
      </ul>
    );
                            
    return (                                                                                       
      <div id="project">
        <div id="title">
          <h1>{project.name}</h1>
        </div>
        <div id="overview">          
          <div id="figure">
          <Carrousel pictures={project.pictures} />
          </div>
          <div id="details">
            <div id="mission">
              <h2>Mission</h2>
                {project.mission}
            </div>
            <div id="targets">
              <h2>Objéctifs</h2>
                {targets}
            </div>
            <div id="resources">
              <Collapse title="Ressources"content={resources} />
            </div>
            <div>                     
              {project.link === "null" ? (""): ( <Link to={project.link}><FontAwesomeIcon icon={faGithub} /> Lien Github</Link>)}
            </div>  
          </div>
        </div>
      </div>
    );
  };
};                                                                         