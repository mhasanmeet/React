import React from 'react'
import "../../styles/projectdetails.scss";
import {useParams} from "react-router-dom";


const ProjectDetails = () => {
    const {id} = useParams()

  return (
    <div className="projectDetails">
        <div className="card">
            <div className="card__content">
                <span className="project__title">Project Title - {id} </span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit totam natus mollitia repellendus libero iure eligendi quas eveniet deleniti excepturi.</p>
            </div>
            <div className="card__action">
                <div className="user">Posted by Mahmudul</div>
                <div className="date">12 Jan, 2023</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails