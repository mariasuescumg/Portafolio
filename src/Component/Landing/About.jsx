import React from 'react'
import ms from "../../assets/image/Maria.png"

export const About = () => {
  return (
    <div className='about'>
      <div className='about-img'>

        <img src={ms} alt="foto de maria suescum" />

      </div>
      <div className='about-text'>
        <h2 className='about-text-title'>About</h2>
      <p>Hello!! I am María Suescum, Electromedicine Professional and full-stack web developer. In recent years I have worked in various fields of work focused on customer and commercial service in areas such as Health and Finance. In 2021 I got to know the world of web development and I am passionate about learning about these technologies, which is why in 2022 I was presented with the opportunity to study full-stack development under a technology scholarship program with Programate Academy, where I received the necessary guidance to enter this entire Developer world and I started to carry out my first projects in frontend and backend with various technologies</p>

      <button className='about-button'>CV</button>
      </div>

    </div>
  )
}
