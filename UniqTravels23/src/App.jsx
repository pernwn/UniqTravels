
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/nav'
import HomePage from './pages/homepage'



function App() {

  return (
    <main>
    <Nav /> 
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<HomePage />} />
        <Route path="/planner" element={<HomePage />} />
        <Route path="/map" element={<HomePage />} />
        <Route path="/user" element={<HomePage />} />
        <Route path="/login" element={<HomePage />} />
    </Routes>
    </main>
)
}

export default App
