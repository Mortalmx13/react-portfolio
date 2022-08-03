import React from 'react'; 
import ProjectCards from '../../components/Project/Project'
import portfolio from '../../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  

    return (
        <section className="container">
          <div className="project">
            <h2 className="top-title">My Portfolio</h2>
            <hr></hr>
          </div>
{/* bring in image/name/github/live link to all the projects in the portfolio.json file */}
          <Wrapper id="card-data">
            {portfolio.map((project) => (
              <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} />
            ))}
          </Wrapper>
        </section>
    
    );
  }

export default Portfolio;