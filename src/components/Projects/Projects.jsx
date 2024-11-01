import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Project_Data from '../../assets/projects_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <div className="projects-title">
        <h1>My projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="projects-container">
        {Project_Data.map((project,index)=>{
            return <div key={index} className='projects-format'>
                        <h3>{project.p_no}</h3>
                        <h2>{project.p_name}</h2>
                        <p>{project.p_desc}</p>
                        <div className='project-readmore'>
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </div>
        })}
      </div>
    </div>
  )
}

export default Projects
