import React from 'react';
import '../../Styles/Profile-styles/ProProjects.scss';

export default function ProProjects() {
  return (
    <div className="proProjects">
      <h2>Professional Projects</h2>
      <div>
        <h4>Province-wide Scheduling Hub: September 2020 - Current</h4>
        <p>Implemented new api endpoints, ActiveRecord Models and user interfaces for a province-wide scheduling platform.</p>
      </div>
      <div>
        <h4>Manitoba COVID-19 Vaccination Scheduling Tool: January 2021 - March 2021</h4>
        <p>Repurposed existing company platform for COVID-19 vaccine scheduling for clinics and hospitals in Manitoba.</p>
      </div>
    </div>
  )
}