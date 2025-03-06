import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Get user from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user from storage 
    setUser(null);
    navigate("/signin");
  };
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/leavelist">LeaveList</Link>
      <Link to="/leaveform">LeaveForm</Link>
      {user ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
    </nav>
  );
};
export default Navbar;
