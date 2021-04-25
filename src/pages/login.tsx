import { Button, Paper, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import Footer from "../sections/footer";
import Header from "../sections/header";

function Login() {
  const history = useHistory();

  const [userName, setUserName] = useState<string>('');

  const login = () => {
    localStorage.setItem('current_user', 'c6493cd7-4836-40c7-bb46-99567662a9c3');
    history.replace('/network');
  }

  return (
    <section>
      <Header
        currentPage="login"
      />

      <section className="app-body container-fluid flex-midpoint">
        <Paper className="wd-50vw p-4">
          <div>
            <TextField
              label="username"
              value={userName}
              onChange={(ev) => setUserName(ev.target.value)}
            />
          </div>
          <div className="w-100 justify-center">
            <Button onClick={() => login()}>
              login
            </Button>
          </div>
        </Paper>
      </section>

      <Footer

      />
    </section>
  );
}

export default Login;
