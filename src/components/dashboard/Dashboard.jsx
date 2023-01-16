import React from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import "../../styles/dashboard.scss";

function Dashboard() {
  return (
    <div className="dashboard">
        <div className="row">
            <div className="project">
                <ProjectList/>
            </div>
            <div className="notification">
                <Notifications/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard