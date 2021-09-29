import React from 'react';

export default function ProjectDetail({ projects }) {

    return (
    <div className="container">
      <ul className="list-group">
        { projects.map((project) => (
          <li className="list-group-item text-center" style={{height: '400px'}} key={project.id}>
            <img 
            alt={project.name}
            className='img-fluid'
            src={process.env.PUBLIC_URL +`../assets/media/projects/${project.src}`}
            style={{ margin: '0 auto'}}
            />
            <h3>{project.name}</h3>
          </li>
        ))}
      </ul>
    </div>
        
    )
}