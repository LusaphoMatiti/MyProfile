import React from "react";
import "../Styling/Header.css";
import "../Styling/Project.css";

const Projects = () => {
  return (
    <div className="section projects">
      <h3>My Projects</h3>
      <div className="projects-grid">
        <div className="project-item">
          <img src="dumbbell.png" alt="Project 1 Icon" />
          <h3>My Fitness Tracker</h3>
          <a style={{ textDecoration: "none" }} href="http://">
            View Project
          </a>
        </div>
        <div className="project-item">
          <img src="hand.png" alt="Project 2 Icon" />
          <h3>Personal Finance Tracker</h3>
          <a style={{ textDecoration: "none" }} href="http://">
            View Project
          </a>
        </div>
        <div className="project-item">
          <img src="gardening.png" alt="Project 3 Icon" />
          <h3>Garden Assistant</h3>
          <a style={{ textDecoration: "none" }} href="http://">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
