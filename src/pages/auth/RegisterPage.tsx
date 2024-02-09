import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContextProvider, {
  useAuth,
} from "../../context/auth/AuthContextProvider";
import Loader from "../../components/loader/Loader";
import "./LoginPage.css"


export default function RegisterPage() {
  const navigate = useNavigate();
  const { handleRegister, error, setError, loading } = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password_confirm, setPasswordConfirm] = React.useState("");

  function handleSave() {
    if (!email.trim() || !password.trim() || !password_confirm.trim()) {
      alert("Some inputs are empty!");
      return;
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", password_confirm);
      handleRegister(formData, navigate);
    }
  }

  React.useEffect(() => {
    setError(false);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
   
      {error ? <h2>{error}</h2> : null}
      <div className="register-bg flex justify-center items-center">
        <div className="flex flex-col items-center gap-5 bg-white w-72 h-96 border rounded-2xl border-violet-700 border-solid">
          <h1 className="pt-8">Register</h1>

          <TextField
            label="Email"
            color="secondary"
            focused
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            color="secondary"
            focused
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Password"
            color="secondary"
            focused
            type="password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />

          <Button
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
            onClick={() => handleSave()}
          >
            Register
          </Button>
        </div>
      </div>
    </>
  );
}
