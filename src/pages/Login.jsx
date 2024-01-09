import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../api";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const location = useLocation();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    console.log(loginFormData);
    loginUser(loginFormData)
      .then((data) => {
        console.log(data);
        setError(null);
        //replace: true is used to replace the current entry in the history stack
        localStorage.setItem("logged-in", true);
        navigate("/host", { replace: true });
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setStatus("idle");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      {location.state?.message && (
        <span className="login-error">{location.state.message}</span>
      )}
      <h1>Sign in to your account</h1>
      {error?.message && <span className="login-error">{error.message}</span>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : " Log in"}
        </button>
      </form>
    </div>
  );
}
