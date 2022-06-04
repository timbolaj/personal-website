import React, { useState } from 'react';
import picture from '../images/profile_pic.jpg';
import '../Styles/Profile.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Summary from './Profile-components/Summary';
import Skills from './Profile-components/Skills';
import Resume from './Profile-components/Resume';
import Button from '@material-ui/core/Button';
import DownButton from './DownButton';

const SUMMARY = 'Summary';
const SKILLS = 'Skills';
const RESUME = 'Resume';

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
            {mode === RESUME && <Resume />}
          </div>
    
          <div className="modes">
            <Button
              variant="contained"
              color="secondary"
              className="summary"
              onClick={() => setMode(SUMMARY)}
            >
              Summary
            </Button>

            &nbsp;

            <Button
              variant="contained"
              color="secondary"
              className="skills"
              onClick={() => setMode(SKILLS)}
            >
                Skills
            </Button>
              
            &nbsp;

            <Button
                variant="contained"
                color="secondary"
                className="resume"
                onClick={() => setMode(RESUME)}

              >
                Resume
            </Button>
                
          </div>
        </div>        
      </div>

      <DownButton pageTag={'profile'} />
    </div>
  )
}