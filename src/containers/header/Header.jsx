import React from 'react'
import './header.css'
import People from '../../assets/people.png'
import Ai from '../../assets/ai.png'

export default function Header() {
  return (
    <div className='gpt3__header section__padding' id='home'>

      <div className="gpt3__header-content">

        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repudiandae dolor natus expedita tempore omnis, eligendi reprehenderit nemo quis quam! Ullam unde debitis velit harum praesentium. Dolorum repudiandae quas sequi magnam minus.</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={People} alt="People" />
          <p>1600 people requested for access in last 24 hours</p>
        </div>

      </div>

      <div className="gpt3__header-image">
        <img src={Ai} alt="Ai" />
      </div>

    </div>
  )
}
