import React from 'react';
import '../../Styles/Profile-styles/Summary.scss'

export default function Summary() {
  return (
    <div className='Summary'>
      <h4>About Me</h4>
      <br className='break'></br>
      <p>I am a full-stack web developer specializing in Angular, Ruby on Rails and React.</p>
      <p>My professional experience to date has included the following:</p>
      <ul>
        <li>Architecting and realization of front-end components</li>
        <li>Implementation of mock-ups using Zeplin and Figma</li>
        <li>Creation and maintenance of api endpoints and database/model-related operations</li>
        <li>Unit testing of both back-end and front-end code</li>
      </ul>
      <div className='supplementary'>
        <p>Since 2021, I have embraced a semi-nomadic lifestyle, often travelling and working to and from both hemispheres.</p>
      </div>
        <p>I am also multilingual and can communicate with colleagues in English, French and Spanish.</p>        
    </div>
  )
}