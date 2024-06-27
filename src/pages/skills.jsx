import "./skills.scss"

export default function Skills() {              
    return (
      <div id="skills">
        <div className="skill">
          <h1>Frontend</h1>
          <ul>
            <li>HTML</li> 
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skill">
          <h1>Backend</h1>
          <ul>
              <li>React</li> 
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Node.js</li>
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
    </div>
    );
  };