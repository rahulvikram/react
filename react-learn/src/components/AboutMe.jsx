import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css'; // You'll need to create this CSS file

export function AboutMe() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Me</h1>
      </header>
      
      <section className="bio-section">
        <img 
          src="/profile-image.jpg" 
          alt="Profile" 
          className="profile-image"
        />
        <div className="bio-content">
          <h2>Hello, I'm [Your Name]</h2>
          <p>
            I'm a passionate web developer with expertise in React.js and modern JavaScript.
            I enjoy building responsive, user-friendly applications that solve real-world problems.
          </p>
          <p>
            When I'm not coding, you can find me hiking, reading, or experimenting with new technologies.
          </p>
        </div>
      </section>
      
      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">React.js</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">HTML/CSS</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">Git</div>
          <div className="skill-card">Responsive Design</div>
        </div>
      </section>
      
      <section className="education-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Bachelor of Science in Computer Science</h3>
          <p>University Name, Graduation Year</p>
        </div>
      </section>
      
      <div className="cta-section">
        <Link to="/projects" className="cta-button">View My Projects</Link>
        <Link to="/contact" className="cta-button">Contact Me</Link>
      </div>
    </div>
  );
}

