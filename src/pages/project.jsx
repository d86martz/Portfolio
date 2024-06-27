import {useLocation, Navigate} from "react-router-dom";
import { Link } from "react-router-dom";
import ProjectsData from "../datas/projectsData.json";
import "./project.scss"

export default function Project () {
  const location = useLocation();                                           
  const project = ProjectsData.find((projectData => projectData.id === location.state));
  if (location.state == null) {                                             
    return <Navigate replace to="*" />
  }                              
    return (                                                                                       
      <div>
        <h1>{project.name}</h1>
        <img 
          src={project.cover}
          alt={project.name} />
        <p>{project.description}</p>
        <span><Link to={project.link}>Lien Github</Link></span>
      </div>
    );
  };                                                                         