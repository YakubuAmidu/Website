import React from 'react';
import PROJECTS from '../data/projects';

const Project = (props) => {
  const { title, image, link, description } = props.project;

  return (
    <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
      <h3>{title}</h3>
      <img src={image} alt='project' style={{ width: 150, height: 150 }} />
      <p>{description}</p>
      <a href={link}>{link}</a>
    </div>
  );
};

const Projects = () => (
  <div>
    <h2>Hightlighted Project</h2>
    <div>
      {PROJECTS.map((PROJECT) => (
        <Project key={PROJECT.id} project={PROJECT} />
      ))}
    </div>
  </div>
);

export default Projects;
