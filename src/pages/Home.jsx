import React from 'react'
import hospitalImg from '../assets/hospital.jpg'

const Home = () => {
  return (
    <div className="content-section">
      <img src={hospitalImg} alt="Hospital" className="banner-img" />

      <h2>Welcome to Hospital Management System</h2>

      <p>
        A modern digital solution designed to manage hospital activities
        efficiently, securely, and smoothly.
      </p>

      <div className="stats">
        <div className="stat-card">
          <h3>50+</h3>
          <p>Doctors</p>
        </div>
        <div className="stat-card">
          <h3>15+</h3>
          <p>Departments</p>
        </div>
        <div className="stat-card">
          <h3>10k+</h3>
          <p>Patients</p>
          
      </div>
    </div>
    </div>
  )
}

export default Home