import React from 'react';
import '../../Styles/Profile-styles/Skills.scss';

export default function Skills() {

  return (
    <div className="skills">
      <div className='upper-half'>
        <div className="front-end">
          <h5>Frontend</h5>
          <p>Angular</p>
          <p>React</p>
          <p>RxJS</p>
          <p>NgRx</p>
          <p>Redux</p>
          <p>jQuery</p>
          <p>HTML</p>
          <p>CSS/Sass</p>
          <p>Bootstrap</p>
        </div>

        <div className="back-end">
          <h5>Backend</h5>
          <p>Rails</p>
          <p>NodeJS</p>
          <p>Express</p>
          <p>Django</p>
        </div>

        <div className="testing">
          <h5>Testing</h5>
          <p>Jasmine/Karma</p>
          <p>Jest</p>
          <p>Rspec</p>
          <p>Cypress</p>
          <p>Mocha</p>
          <p>Chai</p>
          <p>Capybara</p>
        </div>
      </div>

      <div className="bottom-half">
        <div className="programming-languages">
          <h5>Languages</h5>
          <p>JavaScript</p>
          <p>TypeScript</p>
          <p>Ruby</p>
          <p>Python</p>
        </div>

        <div className="soft-skills">
          <h5>Soft-Skills</h5>
          <p>Agile scrum</p>
          <p>Teamwork</p>
          <p>Communication</p>
          <p className="languages">Fluent in English, French and Spanish</p>
        </div>
      </div>
    
    </div>
  )
}