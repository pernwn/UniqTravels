import { Route, Routes } from "react-router-dom"

export default function Destination(){
return(
<ThemeProvider theme={customTheme(outerTheme)}>
<CssBaseline enableColorScheme />

<Routes>
  <Route path="/signup" element={<SignUp />} />
  </Routes>

</ThemeProvider>

)
}

