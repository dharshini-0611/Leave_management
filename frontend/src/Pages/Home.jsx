import { Link } from "react-router-dom";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Leave Management System</h1>
        <p>Manage your leaves efficiently with our easy-to-use platform.</p>
        <div className="home-buttons">
          <Link to="/signin">
            <button className="btn-primary">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="btn-secondary">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
