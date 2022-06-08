import React, { useState } from 'react';
import picture from '../images/profile_pic.jpg';
import '../Styles/Profile.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Summary from './Profile-components/Summary';
import Skills from './Profile-components/Skills';
import Button from '@material-ui/core/Button';
import DownButton from './DownButton';
import ProProjects from './Profile-components/ProProjects';

const SUMMARY = 'Summary';
const SKILLS = 'Skills';
const RESUME = 'Resume';
const PROFESSIONALPROJECTS = 'ProfessionalProjects';

export default function Profile() {

  const [mode, setMode] = useState(SUMMARY);

  return (
    <div id="profile" className="profile d-flex justify-content-center vertical-center">
      <div className="content-container">
        <div className="profile-picture">
          <img src={picture} alt="profile-pic"></img>
        </div>

        <br></br>

        <div className={"info-container " + (mode === RESUME ? 'resume-mode' : '')}>

          <div className="profile-components">
            {mode === SUMMARY && <Summary />}
            {mode === SKILLS && <Skills />}
            {mode === PROFESSIONALPROJECTS && <ProProjects />}
          </div>
    
          <div className="modes">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setMode(SUMMARY)}
            >
              Summary
            </Button>

            &nbsp;

            <Button
              variant="contained"
              color="secondary"
              onClick={() => setMode(SKILLS)}
            >
                Skills
            </Button>
              
            &nbsp;

            <Button
              variant="contained"
              color="secondary"
              onClick={() => setMode(PROFESSIONALPROJECTS)}
            >
              Professional Projects
            </Button>
            
            
            &nbsp;

            <Button
                variant="contained"
                color="secondary"
              >
                <a href="https://resume.creddle.io/resume/1g0nfcz2ism" target="_blank" rel="noreferrer noopener">Resume</a>
            </Button>
                
          </div>
        </div>        
      </div>

      <DownButton pageTag={'projects'} />
    </div>
  )
}