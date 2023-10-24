//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør
//kodet af Rina

import { customTheme } from "../themes/themes";
import { useTheme } from "@mui/material/styles";

import { Button, CssBaseline, ThemeProvider, Typography, TextField } from "@mui/material";
import { useState } from "react";

export default function Login() {
  const outerTheme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // vi bruger reacts "useState" hook og sætter password og email som en tom string('')
  // vi inkluderer også setPassword og setEmail. Det betyder at senere kan vi opdatere dem ved at skrive 'setPassword(nyværdi)'

  const handleLogin = () => {
    if (email === "user@example.com" && password === "password") {
      alert("welcome!");
    } else {
      alert("lol noob");
    }
  };
  // i denne sætning if (email === 'user@example.com' && password === 'password') starter vi en 'if' sætning for at undersøge om email og password matcher
  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <section>
        <div>
          <Typography variant="h2">Login</Typography>

        <TextField 
          type="email"
          placeholder="Type here..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-email" 
          label="E-mail" 
          variant="outlined" />


        <TextField 
           type="password"
          placeholder="Type here..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="outlined-password" 
          label="Password" 
          variant="outlined" />

          <Button variant="contained" type="button" onClick={handleLogin}>Login</Button>
          
        </div>
      </section>
    </ThemeProvider>
  );
}
