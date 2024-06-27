                                       
import Card from "../../components/card/card";
import ProjectsData from "../../datas/projectsData.json";
import "./gallery.scss"

export default function Gallery() {                                                                            
    return (                                                                                       
      <div id="gallery">
        <ul>
          {ProjectsData.map((project => {
            return (
              <Card
                key={project.id}
                id={project.id}
                title={project.name}
                cover={project.cover}
              />
            )
          }))}
        </ul>
      </div>
    );
  };