
import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/nav'
import HomePage from './pages/homepage'
import Planner from './pages/planner'  //TODO: denne laver vi hvis vi har overskud

import User from './pages/user'
import Booking from './pages/booking'
//import Map from './pages/map'

import SignUp from './pages/signup'
import Login from './pages/login'

import Error from './pages/404'

//import af separat theme file
import { customTheme } from './themes/themes'
import { useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import Destination from './components/destination'


function App() {

  //Oprettelse af variabel for at bruge useTheme
  const outerTheme = useTheme();
  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <CssBaseline enableColorScheme />

      <Routes>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
<<<<<<< HEAD

    </Routes>
    </main>
)
=======
=======
        <Route path="/destination" element={<Destination />} />
>>>>>>> c2bd46f6623a7cc0f511614f04287973b793a4c7
        <Route element={
          <>
            <Nav />
            <Outlet /*Outlet bruges her så navigationen ikke bliver vist på sign up og login */ />
          </>
        }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/planner" element={<Planner />} /> {/*TODO: evt kan vi kalde denne for inspiration eller community hvor der kun er reviews af steder, appen osv – evt kan man skrive kommentarer til andre brugere? */}
          <Route path="/map" element={<Error />} />
          <Route path="/user" element={<User />} />

          <Route path="*" element={<Error />} />

        </Route>



      </Routes>
    </ThemeProvider>
  )
>>>>>>> 38c93cf6db78fe7a20d0fbc41ff147dc20cf00da
}

export default App
