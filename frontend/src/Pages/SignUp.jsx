import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Auth.css";

const SignUp = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "", role: "employee" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5100/users", user);
      alert("Signup successful! You can now login.");
      navigate("/signin");
    } catch (error) {
      console.error("Signup Error:", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/signin">Sign In</a></p>
      </div>
    </div>
  );
};

export default SignUp;
