
import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/nav'
import HomePage from './pages/homepage'
import Planner from './pages/planner'

import User from './pages/user'
import Booking from './pages/booking'
import Map from './pages/booking'

import SignUp from './pages/signup'
import Login from './pages/login'

import Error from './pages/404'

//import af separat theme file
import { customTheme } from './themes/themes'
import { useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

function App() {
   //Oprettelse af variabel for at bruge useTheme
  const outerTheme = useTheme();
  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <CssBaseline enableColorScheme />

      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={
          <>
            <Nav />
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/planner" element={<Error />} />
        <Route path="/map" element={<Map />} />
        <Route path="/user" element={<User />} />

        <Route path="*" element={<Error />} />

      </Route>


       
      </Routes>
    </ThemeProvider>
  )
}

export default App
