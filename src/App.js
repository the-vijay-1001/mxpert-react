import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import { Route, Routes } from 'react-router-dom';
import Book from './pages/book';
import { useEffect, useState } from 'react';
import Appointment from './pages/appointments';
import DoctorsAndPatients from './pages/all';
function App() {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  useEffect(() => {
    const isToken = localStorage.getItem("token")
    const role = localStorage.getItem("role")
    if (role == "patient") {
      setRole(role);
    }
    else {
      setRole(null)
    }
    if (isToken)
      setToken(isToken)
  })
  return <>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/book' element={(token && role) ? <Book /> : <Login />} />
      <Route path='/appointments' element={(token && role) ? <Appointment /> : <Login />} />
      <Route path='/doctors-patients' element={(token && role) ? <DoctorsAndPatients /> : <Login />} />
    </Routes>
  </>
}

export default App;
