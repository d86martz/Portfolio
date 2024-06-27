import { useNavigate } from "react-router-dom";
import "./card.scss"                                  

const Card = (props) => {                            
  const navigate = useNavigate();                      
  const id = props.id                            
  const projectPage = (id) => {                       
      navigate(`/portfolio/${id}`, {state: id})       
  };
  return (                                            
    <li id="card" onClick={() => projectPage(id)}>
      <h2>{props.title}</h2>    
      <img src={props.cover} alt={props.title} />
    </li>
  );
};

export default Card;                                 
