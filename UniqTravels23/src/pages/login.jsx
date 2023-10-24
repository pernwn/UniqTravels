//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør
//kodet af Rina
import { ThemeProvider } from "@mui/material";
import { customTheme } from '../themes/themes';
import { useState } from "react";
import { useTheme } from "@emotion/react";

export default function Login(){
  const outerTheme = useTheme();
    const [email] = useState('');
    const [password] = useState('');

// vi bruger reacts "useState" hook og sætter password og email som en tom string('')
// vi inkluderer også setPassword og setEmail. Det betyder at senere kan vi opdatere dem ved at skrive 'setPassword(nyværdi)'

    const handleLogin = () => {
        if (email === 'user@example.com' && password === 'password'){
            alert('welcome!')
        }
        else{
            alert('lol noob')
        }
    }
// i denne sætning if (email === 'user@example.com' && password === 'password') starter vi en 'if' sætning for at undersøge om email og password matcher
    return(
      <ThemeProvider theme={customTheme(outerTheme)}>
        <section>
            <div>
      <Typography variant="h2">Login</Typography>
      <input
        type="email"
        placeholder="Email"
        value={email}
     //   onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
     //   onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
    </section>
    </ThemeProvider>
  );
        
}