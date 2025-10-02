import React, { useState } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // you can also fetch these from an array
  const projects = [
    {
      id: 1,
      title: "Traffic Light Simulator",
      img: "/project1.png",
      fullDesc: "task is to bring the provided traffic light interface to life by writing JavaScript. You will implement functionality for six buttons to control the light states, cycle through predefined colors, and generate random light changes.",
      technologies: "HTML, CSS, JavaScript",
    },
    {
      id: 2,
      title: "Wordle Game",
      img: "/project2.png",
      fullDesc: "task is to complete the JavaScript functionality for a Word Guessing Game using the provided HTML, CSS, and base JavaScript files. The base setup includes only the regular mode, you must implement the full game logic, including guessing mechanics, lives, win/loss conditions, and Time Mode.",
      technologies: "HTML, CSS, JavaScript",
    },
    {
      id: 3,
      title: "Pokémon Game",
      img: "/project3.png",
      fullDesc: "task is to build a dynamic Pokédex application using JavaScript. Users can search for Pokémon by name or ID, view their details in a styled card, open a modal to view more information, and add up to 6 Pokémon to a favourites list stored in localStorage",
      technologies: "HTML, CSS, JavaScript",
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      <div className="section-header">
        <h1>My Projects</h1>
        <p className="section-subtitle">Here are some of my recent work and accomplishments</p>
      </div>
      <div className="project-grid">
        {projects.map(p => (
          <article className="project-card" key={p.id}>
            <div className="project-image-container">
              <img src={p.img} alt={p.title} />
            </div>
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <button className="project-btn" onClick={() => openModal(p)}>
                View Details
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <img src={selectedProject.img} alt={selectedProject.title} className="modal-image" />
              <p>{selectedProject.fullDesc}</p>
              <div className="project-details">
                <div className="detail-item">
                  <strong>Technologies Used:</strong> {selectedProject.technologies}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-btn primary" onClick={closeModal}>Play Demo</button>
              <button className="modal-btn secondary" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;