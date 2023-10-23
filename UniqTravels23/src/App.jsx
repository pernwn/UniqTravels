
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/nav'
import HomePage from './pages/homepage'
import Planner from './pages/planner'



function App() {

  return (
    <main>
    <Nav /> 
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<HomePage />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/map" element={<HomePage />} />
        <Route path="/user" element={<HomePage />} />
        <Route path="/login" element={<HomePage />} />
    </Routes>
    </main>
)
}

export default App
