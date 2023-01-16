import React from 'react'
import ProjectSummary from './ProjectSummary';
import "../../styles/projectlist.scss";

const ProjectList = () => {
  return (
    <div className="ProjectList">
        <ProjectSummary/>
        <ProjectSummary/>
        <ProjectSummary/>
        <ProjectSummary/>
    </div>
  )
}

export default ProjectList