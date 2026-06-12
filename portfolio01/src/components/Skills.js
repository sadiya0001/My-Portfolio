import React from 'react';
import './Skills.css';

function Skills() {
  const skills = ['React', 'Next.js', 'Spring Boot', 'Flutter', 'Python', 'Cybersecurity'];

  return (
    <section id="skills" className="skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
