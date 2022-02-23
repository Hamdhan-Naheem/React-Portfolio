import React from 'react'
import './Project.css'

const Project = ({link,img}) => {
  return (
    <div className='project'>
      <div className="pro-browser">
        <div className="pro-circle"></div>
        <div className="pro-circle"></div>
        <div className="pro-circle"></div>
      </div>

      <a href={link} target="_blank" rel='noreferrer'>
        <img src={img} alt="" className='project-img'/>
      </a>
    </div>
  )
}

export default Project