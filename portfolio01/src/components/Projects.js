import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'DocRoad',
      description: 'Microservices-based platform connecting motorists and mechanics.',
      tags: ['Spring Boot', 'React', 'Docker'],
    },
    {
      title: 'Smart Crop Monitoring',
      description: 'IoT dashboard for remote pump control with 2D visualization.',
      tags: ['IoT', 'Python', 'MQTT'],
    },
    {
      title: 'Algorithmic Trading System',
      description: 'Python-based market signal generator via Deriv/Binary APIs.',
      tags: ['Python', 'REST API', 'WebSocket'],
    },
    {
      title: 'RentGo',
      description: 'Luxury goods and tool rental marketplace.',
      tags: ['Next.js', 'Node.js', 'MongoDB'],
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <button className="project-btn">View Details →</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
