import React from 'react'
import './Contact.css'
import Phone from '../../Images/call.png'
import Email from '../../Images/mail1.png'
import Map from '../../Images/map.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-bg"></div>
        <div className="contact-wrapper">
            <div className="contact-left">
                <h1 className="contact-title">
                    Let me know your project!
                </h1>

                <div className="contact-info">
                    <div className="contact-info-item">
                        <img src={Phone} alt="" className='contact-icon'/>
                        +94 774845869
                    </div>

                    <div className="contact-info-item">
                        <img src={Email} alt="" className='contact-icon' />
                        naheemhamdhan77@gmail.com
                    </div>

                    <div className="contact-info-item">
                        <img src={Map} alt="" className='contact-icon' />
                        Kandy, Sri Lanka
                    </div>
                </div>
            </div>
            <div className="contact-right"></div>
        </div>
    </div>
  )
}

export default Contact