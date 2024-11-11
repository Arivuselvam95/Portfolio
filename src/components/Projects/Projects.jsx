import React, { useState } from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import Project_Data from '../../assets/projects_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import "./Projects.css"


const ProjectModal = ({ isOpen, onClose, project }) => {

  if (!isOpen || !project) return null;

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content"  onClick={handleContentClick}>
        <button className='modal-content-close' onClick={onClose}>✕</button>
        <h2 className='model-title'>{project.p_name}</h2>
        <div className="project-details" style={{ marginBottom: '1.5rem' }}>
          <h3 className='pro-model-header'> Description
          </h3>
          <p className='pro-info'>{project.p_info}</p>
        </div>
        <div className='pro-model-link'>
          <a href={project.p_link} target="_blank" rel="noopener noreferrer">
            Visit Project
            <img src={arrow_icon} alt=""  />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project, e) => {
    e.preventDefault(); 
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>My projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="projects-container">
        {Project_Data.map((project, index) => (
          <div key={index}  className="projects-format"  onClick={(e) => handleProjectClick(project, e)}>
            <h3>{project.p_no}</h3>
            <h2>{project.p_name}</h2>
            <p>{project.p_desc}</p>
            <div className="project-readmore">
              <p>Read More</p>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
        ))}
      </div>

      <ProjectModal isOpen={isModalOpen}  onClose={() => setIsModalOpen(false)} project={selectedProject}/>
    </div>
  );
};

export default Projects;