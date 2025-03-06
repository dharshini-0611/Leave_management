import { useEffect, useState } from "react";
import { getLeaves } from "../services/api";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [leaves, setLeaves] = useState([]);
  const [leaveBalance, setLeaveBalance] = useState(20); // Example leave balance
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

    // Fetch leave data
    const fetchData = async () => {
      const response = await getLeaves();
      setLeaves(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h2>Welcome, {user?.name || "Guest"}</h2>
      <div className="dashboard-card">
        <h3>Leave Balance</h3>
        <p>{leaveBalance} Days</p>
      </div>
      <div className="leave-list">
        <h3>Leave Requests</h3>
        {leaves.length > 0 ? (
          leaves.map((leave, index) => (
            <div key={index} className="leave-item">
              <p>
                {leave.type} - {leave.startDate} to {leave.endDate}
              </p>
              <span className={leave.status}>{leave.status}</span>
            </div>
          ))
        ) : (
          <p>No leave requests found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
