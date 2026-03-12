import React from 'react'
import cardio from '../assets/cardiology.jpg'
import neuro from '../assets/neurology.jpg'
import ortho from '../assets/Orthopedic.jpg'
import optho from '../assets/Opthmology.jpg'
import dentist from '../assets/Dentist.jpg'

const Departments = () => {
  return (
    <div className="content-section">
      <h2>Departments</h2>

      <div className="card-grid">
        <div className="dept-card">
          <img src={cardio} alt="Cardiology" />
          <h4>Cardiology</h4>
          <p>Heart-related diagnosis and treatments</p>
        </div>

        <div className="dept-card">
          <img src={neuro} alt="Neurology" />
          <h4>Neurology</h4>
          <p>Brain and nervous system care</p>
        </div>
        <div className="dept-card">
          <img src={ortho} alt="orthopedic"/>
          <h4>Orthopedic</h4>
          <p>Joint pains and fractures</p>
        </div>
        <div className="dept-card">
          <img src={optho} alt="opthmology"/>
          <h4>Opthomologist</h4>
          <p>Eye treatment and eye care</p>
        </div>
        <div className="dept-card">
          <img src={dentist} alt="dentist"/>
          <h4>Dentist</h4>
          <p>Tooth treatment and tooth care</p>
        </div>
        
      </div>
    </div>
  )
}

export default Departments