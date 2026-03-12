import React from 'react'
import doc1 from '../assets/doctor1.jpg'
import doc2 from '../assets/doctor2.jpg'
import doc3 from '../assets/doctor3.jpg'
import doc4 from '../assets/doctor4.jpg'
const Doctors = () => {
  return (
    <div className="content-section">
      <h2>Our Doctors</h2>

      <div className="card-grid">
        <div className="doctor-card">
          <img src={doc1} alt="Doctor" />
          <h4>Dr.Priya</h4>
          <p>Cardiologist</p>
          <p>12 Years Experience</p>
        </div>

        <div className="doctor-card">
          <img src={doc2} alt="Doctor" />
          <h4>Dr. Arun</h4>
          <p>Neurologist</p>
          <p>9 Years Experience</p>
        </div>
        <div className="doctor-card">
          <img src={doc3} alt="Doctor"/>
          <h4>Dr.Anjali</h4>
          <p>Opthomologist</p>
          <p>6 years Experience</p>
        </div>
        <div className="doctor-card">
          <img src={doc4} alt="Doctor"/>
          <h4>DR.P.V.Rao</h4>
          <p>Orthopedic</p>
          <p>7 years Experience</p>
        </div>
      </div>
    </div>
  )
}

export default Doctors