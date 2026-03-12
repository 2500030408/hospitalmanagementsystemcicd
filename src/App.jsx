import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./components/HomePage";
import Home from "./pages/Home";
import AboutHospital from "./pages/Abouthospital";
import Contact from "./pages/Contact";
import Departments from "./pages/Departments";
import DoctorPage from "./pages/Doctors";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

/* ADMIN */
import Admin from "./pages/admin/Admin";
import Dashboard from "./pages/admin/Dashboard";
import Doctors from "./pages/admin/Doctors";
import Patients from "./pages/admin/Patients";
import Appointments from "./pages/admin/Appointments";
import AdminReports from "./pages/admin/Reports";
import AdminDepartment from "./pages/admin/Department";
/* DOCTOR */
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import MyPatients from "./pages/doctor/MyPatients";
import DoctorAppointments from "./pages/doctor/Appointments";
import AddReport from "./pages/doctor/AddReport";
import DoctorLayout from "./pages/doctor/Doctorlayout";

/* PATIENT */

import PatientDashboard from "./pages/patient/PatientDashboard";
import BookAppointment from "./pages/patient/BookAppointment";
import MyReports from "./pages/patient/MyReports";
import PatientLayout from "./pages/patient/PatientLayout";
import Patientmodule from "./pages/patient/Patientmodule";

import "./App.css";

const ProtectedRoute = ({ children, role }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (role && currentUser.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutHospital />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="departments" element={<Departments />} />
          <Route path="doctor" element={<DoctorPage />} />
          <Route path="patient" element={<Patients />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="ADMIN">
              <Admin />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="patients" element={<Patients />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="departments" element={<AdminDepartment />} />
        </Route>

        {/* DOCTOR ROUTES */}
        <Route
          path="/doctor-panel"
          element={
            <ProtectedRoute role="DOCTOR">
              <DoctorLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<DoctorDashboard />} />
          <Route path="mypatients" element={<MyPatients />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="addreport" element={<AddReport />} />
        </Route>

        {/* PATIENT ROUTES */}
        <Route
          path="/patient-panel"
          element={
            <ProtectedRoute role="PATIENT">
              <PatientLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<PatientDashboard />} />
          <Route path="book" element={<BookAppointment />} />
          <Route path="reports" element={<MyReports />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;