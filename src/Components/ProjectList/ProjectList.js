import React from 'react'
import {Element} from 'react-scroll'
import Project from '../Project/Project'
import './ProjectList.css'
import ProjectData from '../../dataProject'

const ProjectList = () => {
  return (
    <Element className='plist'>
        <div className="plist-text">
            <h1 className="plist-title">My Creative Projects</h1>
            <p className="plist-desc">
                These are my own build projects to motivate my self. I spent lots of time
                to create these projects. I got lots experiance and improve my knowledge
                from these projects.
            </p>
        </div>

        <div className="projectL">
            {
              ProjectData.map((item)=>(
                <Project key={item.id} img={item.img} link ={item.link}/>
              ))
            }
        </div>
    </Element>
  )
}

export default ProjectList