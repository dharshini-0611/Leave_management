import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import LeaveForm from "./components/LeaveForm";
import LeaveList from "./components/LeaveList";

const App = () => {
  return (
   
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/leaveform" element={<LeaveForm />} />
          <Route path="/leavelist" element={<LeaveList />} />
        </Routes>
        </div>
    
  );
};

export default App;
