
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// Individual Cards 
function ProjectCards(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <p className="card-title">{props.name}</p>
              <p class="proj-icons-container">
              <a href={props.github}><img class="project-icon" src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"className="icon" alt="GitHub Repo" /></a> 
              <a href={props.deploy}><img class="project-icon" src="https://cdn-icons-png.flaticon.com/512/892/892692.png" className="icon" alt="Live Application" /></a> 
       
             
             </p>
             
        </div>
      </div>
    );
}
  
  export default ProjectCards;