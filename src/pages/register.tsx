import { Paper, TextField } from "@material-ui/core";
import { useState } from "react";
import Footer from "../sections/footer";
import Header from "../sections/header";

function Register() {
  const [userName, setUserName] = useState<string>('');

  return (
    <section>
      <Header
        currentPage="register"
      />

      <section>
        <Paper>
          <TextField
            value={userName}
            onChange={(ev) => setUserName(ev.target.value)}
          />
        </Paper>
      </section>

      <Footer/>
    </section>
  );
}

export default Register;
