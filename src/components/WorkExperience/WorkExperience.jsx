import React, { useState } from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import Experience_Data from '../../assets/work_experience_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import './WorkExperience.css'
const WorkExperience = () => {
  return (
    <div id='experience' className='experience'>
      <div className="experience-title">
        <h1>My Experience</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="experience-container">
        {Experience_Data.map((exp, index) => (
          <div key={index}  className="experience-format"  onClick={(e) => handleProjectClick(project, e)}>
            <h3>{exp.e_no}</h3>
            <h2>{exp.e_name}</h2>
            <h2>{exp.e_company}</h2>
            <p>{exp.e_time}</p>
            <p>{exp.e_desc}</p>
            {/* <div className="experience-readmore">
              <p>Read More</p>
              <img src={arrow_icon} alt="" />
            </div> */}
          </div>
        ))}
      </div>

    </div>
  )
}

export default WorkExperience
