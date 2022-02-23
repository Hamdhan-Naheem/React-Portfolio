import React from 'react'
import './Intro.css'
import {Element} from 'react-scroll'

const Intro = () => {
  return (
        <Element className='intro'>
            <div className='intro__left'>
                <div className='intro__wrapper' >
                    <h2 className='intro__im'>hello i am</h2>
                    <h1 className='intro__name' data-aos="fade-right"
                    data-aos-duration='3000'>hamdhan naheem</h1>

                    <div className="intro__title">
                        <div className="intro__title__wrapper" >
                            <div className="intro__title__item">Web Developer</div>
                            <div className="intro__title__item">JavaScript</div>
                            <div className="intro__title__item">React Js</div>
                            <div className="intro__title__item">Node Js</div>
                            <div className="intro__title__item">Express Js</div>
                            <div className="intro__title__item">Java</div>
                            <div className="intro__title__item">Mongo DB</div>
                            <div className="intro__title__item">MySQL</div>
                        </div>
                    </div>

                    <p className="intro__desc">
                        I am a Web and App Developer. I can build creative and responsive websites. 
                        I am familier with current trending technology like REACT JS, MONGO DB,
                        AOS ANIMATION, MATERIAL UI.
                    </p>
                </div>
            </div>
            
            <div className='intro__right'>
                <div className='right__bg'></div>
                
            </div>

        </Element>
        
  )
}

export default Intro