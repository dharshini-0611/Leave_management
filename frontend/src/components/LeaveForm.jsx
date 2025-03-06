import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LeaveForm.css";
const LeaveForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Ensure no field is empty
    if (!formData.leaveType || !formData.startDate || !formData.endDate || !formData.reason) {
      alert("Please fill in all fields.");
      return;
    }

    // Get user data from local storage
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("You must be logged in to apply for leave.");
      navigate("/signin");
      return;
    }

    const newLeave = {
      ...formData,
      userId: user.id,
      status: "Pending",
    };

    try {
      const response = await fetch("http://localhost:5100/leaves", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLeave),
      });

      if (response.ok) {
        alert("Leave request submitted successfully!");
        navigate("/dashboard");
      } else {
        alert("Failed to submit leave request.");
      }
    } catch (error) {
      console.error("Error submitting leave request:", error);
    }
  };

  return (
    <div className="leave-form-container">
      <h2>Apply for Leave</h2>
      <form onSubmit={handleSubmit} className="leave-form">
        <label>Leave Type:</label>
        <select name="leaveType" value={formData.leaveType} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="Sick Leave">Sick Leave</option>
          <option value="Casual Leave">Casual Leave</option>
          <option value="Annual Leave">Annual Leave</option>
        </select>

        <label>Start Date:</label>
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />

        <label>End Date:</label>
        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />

        <label>Reason:</label>
        <textarea name="reason" value={formData.reason} onChange={handleChange} required></textarea>

        <button type="submit">Submit Leave Request</button>
      </form>
    </div>
  );
};

export default LeaveForm;
