//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør
//kodet af Rina
import { useState } from "react";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        <section>
            <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
    </section>
  );
        
}