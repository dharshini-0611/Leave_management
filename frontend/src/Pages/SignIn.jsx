import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication logic here
    localStorage.setItem("user", JSON.stringify({ name: "User" }));
    
    // Redirect to dashboard with port number
    window.location.href = `http://localhost:5100/dashboard`;  
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
