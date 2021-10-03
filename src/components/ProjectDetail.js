import React from 'react';
import '../styles/project.css'

export default function ProjectDetail({ projects }) {
// TODO Incorporate hover feture that will show options for deployed link and repo and blur out background image
    return (
    <div className="container">
      <ul className="list-group">
        { projects.map((project) => (
          <li className="list-group-item text-center " key={project.id}>
            <div className='linkContainer'>
            <a href={project.deployedLink} target="_blank" rel="noreferrer"><img 
            alt={project.name}
            className='img-fluid image'
            src={process.env.PUBLIC_URL +`../assets/media/projects/${project.src}`}
            style={{ margin: '0 auto', maxWidth: 700}}
            /></a>
            </div>
            <h3>{project.name}</h3>
            <a href={project.gitHubRepo} target='_blank' rel="noreferrer"><img 
            alt='Github Repo'
            className='img-fluid'
            src={process.env.PUBLIC_URL +`../assets/Octocat.png`}
            style={{ margin: '0 auto', maxWidth: 60}}
            /></a>
            <p class='projectDescription'>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
        
    )
}