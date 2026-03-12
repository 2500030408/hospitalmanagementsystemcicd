import { Outlet, Link, useNavigate } from "react-router-dom";
// import "./Doctor.css";

const DoctorLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="panel-container">

      <div className="sidebar">
        <h2>Doctor Panel</h2>

        <Link to="dashboard">Dashboard</Link>
        <Link to="mypatients">My Patients</Link>
        <Link to="appointments">Appointments</Link>
        <Link to="addreport">Add Report</Link>

        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="content">
        <Outlet />
      </div>

    </div>
  );
};

export default DoctorLayout;