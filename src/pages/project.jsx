import {useLocation, useNavigate, Navigate} from "react-router-dom";
import { Link } from "react-router-dom";
import Collapse from "../components/collapse/collapse"
import ProjectsData from "../datas/projectsData.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from '@fortawesome/fontawesome-free-solid'

import "./project.scss"

export default function Project () {
  const nav = useNavigate();
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
    const tools = (
      <ul className={"tools-list"}>
        {project.tools.map((tool, index) => (
          <li key={index} className="tool">{tool}</li>
        ))} 
      </ul>
    );                     
    return (                                                                                       
      <div id="project">
        <button aria-label="return" id="returnBtn" onClick={() => nav(-1)}><FontAwesomeIcon icon={faArrowLeft} /></button>
        <div id="title">
          <h1>{project.name}</h1>
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
          <div id="tools">
            <Collapse title="Outils"content={tools} />
          </div>
          <div>                     
            {project.link === "null" ? (""): ( <Link to={project.link}><FontAwesomeIcon icon={faGithub} /> Lien Github</Link>)}
          </div>  
        </div>
      </div>
    );
  };
};                                                                         