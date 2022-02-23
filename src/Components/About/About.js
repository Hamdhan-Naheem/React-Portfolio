import React from 'react'
import './About.css'
import {Element} from 'react-scroll'
import img from '../../Images/ham.jpeg'

const about = () => {
  return (
    <Element className='about'>
        <div className="about__left">
            <div className="about__card bg"></div>
            <div className="about__card">
                <img src={img} alt=""  className='about__img'/>
            </div>
        </div>
        <div className="about__right">
            <h1 className='about__title' data-aos=''>About Me</h1>

            <p className='about__desc'>
            im a web developer from kandy Sri Lanka. Currently im finished my undergraduate programe in ICBT campus. 
            Self motivated student seeking an intenship position in a good organization where my potentials will be fully discovered while working for the company diligently. 
            I use creative approach to problem solve. I am always energetic and eager to learn new skills.
            </p>
        </div>
    </Element>
  )
}

export default about