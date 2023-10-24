
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/nav'
import HomePage from './pages/homepage'
import Planner from './pages/planner'
import Login from './pages/login'
import User from './pages/user'



function App() {

  return (
    <main>
    <Nav/> 
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<HomePage />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/map" element={<HomePage />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
    </main>
)
}

export default App
