import { Outlet, Link, useNavigate } from "react-router-dom";
import '../Panel.css'
import './Doctor.css'
const Admin = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="doctor-container">

      {/* Sidebar */}
      <div className="doctor-sidebar">
        <h2>Doctor Panel</h2>

        <Link to="doctordashboard">DoctorDashboard</Link>
        <Link to="doctorlayout">DoctorLayout</Link>
        <Link to="mypatients">MyPatients</Link>
        <Link to="appointments">Appointments</Link>
        <Link to="addreports">AddReport</Link>
       

        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="doctor-content">
        <Outlet />
      </div>

    </div>
  );
};

export default Doctor;