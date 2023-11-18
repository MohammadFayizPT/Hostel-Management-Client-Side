import React from 'react'
import './Hero.css'
import front_image from '../Assets/Front_image.jpg'

const Hero = () => {
  return (
    <div className='hero'>
       <img src={front_image} alt="" />
        <p>"Hola Admins,<br />
             Your dedication shapes the experiences
           <br /> and memories that resonate within ,<br />these walls."
       </p>
    </div>
  )
}

export default Hero
