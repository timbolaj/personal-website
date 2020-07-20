import React, { useState, useEffect } from 'react';
import '../Styles/Projects.scss';
import Pathfinder from './Projects/coding-projects/Pathfinder';
import Mapbook from './Projects/coding-projects/Mapbook';
import Scheduler from './Projects/coding-projects/Scheduler';
import ToggleMode from './Projects/ToggleMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { forward, back } from '../helpers/projects-helpers';

export const PATHFINDER = 'pathfinder';
export const MAPBOOK = 'mapbook';
export const SCHEDULER = 'scheduler';
export const ORDER = [PATHFINDER, MAPBOOK, SCHEDULER]

export default function Projects() {

  const [projectMode, setProject] = useState(PATHFINDER)

  return (
    <div className="Projects">
      <h4>Coding Projects</h4>

      <div className="websites">
        {/* <FontAwesomeIcon
          className="toggle-mode-arrows"
          icon={faChevronCircleLeft}
          onClick={() => back(projectMode, setProject)}
        />   */}
        {projectMode === PATHFINDER && <Pathfinder />}
        {projectMode === MAPBOOK && <Mapbook />}
        {projectMode === SCHEDULER && <Scheduler />}
        {/* <FontAwesomeIcon
          className="toggle-mode-arrows"
          icon={faChevronCircleRight}
          onClick={() => forward(projectMode, setProject)}
        />   */}
      </div>
      <ToggleMode
          projectMode={projectMode}
          setProject={setProject}
        />

      <br></br>

      <h4>Articles</h4>
      <div className="articles">
        <div>Data and Binary Search Trees</div>
      </div>
    </div>
  )
}