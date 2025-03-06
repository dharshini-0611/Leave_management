import { useEffect, useState } from "react";
import "../styles/LeaveList.css";

const LeaveList = () => {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
          alert("You must be logged in to view leave requests.");
          return;
        }

        const response = await fetch(`http://localhost:5100/leaves?userId=${user.id}`);
        if (response.ok) {
          const data = await response.json();
          setLeaves(data);
        } else {
          alert("Failed to fetch leave requests.");
        }
      } catch (error) {
        console.error("Error fetching leave data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaves();
  }, []);

  return (
    <div className="leave-list-container">
      <h2>Your Leave Requests</h2>
      {loading ? (
        <p>Loading...</p>
      ) : leaves.length > 0 ? (
        <ul className="leave-list">
          {leaves.map((leave) => (
            <li key={leave.id} className="leave-item">
              <div>
                <strong>{leave.leaveType}</strong>
                <p>{leave.startDate} to {leave.endDate}</p>
                <p>{leave.reason}</p>
              </div>
              <span className={`status ${leave.status.toLowerCase()}`}>{leave.status}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No leave requests found.</p>
      )}
    </div>
  );
};

export default LeaveList;
