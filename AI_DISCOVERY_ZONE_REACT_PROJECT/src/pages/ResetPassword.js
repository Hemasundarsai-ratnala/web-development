import React, { useState } from "react";
import { Link } from "react-router-dom";
// If using React Router, uncomment the next line:
// import { useNavigate, Link } from "react-router-dom";

const ResetPassword = () => {
  // Uncomment and use useNavigate for real navigation in a router setup
  // const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Simulate password reset and redirect
    // navigate("/Login");
    alert("Password reset successful! (Simulated)");
  };

  return (
    <>
      <style>{`
        body {
          height: 100vh;
          background: url('/files/login.png') no-repeat center center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
          margin: 0;
        }
        .reset-container {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 40px 30px;
          box-shadow: 0 0 30px rgba(0,0,0,0.3);
          backdrop-filter: blur(12px);
          width: 380px;
          color: white;
        }
        .reset-container h2 {
          text-align: center;
          margin-bottom: 20px;
          font-weight: 600;
          font-size: 28px;
          color: #00ccff;
        }
        .form-label {
          font-weight: 600;
          margin-bottom: 6px;
        }
        .form-control {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          border: none;
          outline: none;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 1rem;
        }
        .form-control:focus {
          outline: none;
          box-shadow: 0 0 0 2px #00ccff44;
        }
        .form-control::placeholder {
          color: #ddd;
        }
        .btn-reset {
          width: 100%;
          padding: 12px;
          background: #00ccff;
          border: none;
          border-radius: 8px;
          color: black;
          font-weight: 600;
          cursor: pointer;
          font-size: 1.1rem;
          margin-top: 10px;
          margin-bottom: 0;
          transition: 0.3s;
        }
        .btn-reset:hover {
          background: #00aacc;
        }
        .back-link {
          text-align: center;
          margin-top: 15px;
          font-size: 14px;
        }
        .back-link a {
          color: #00ccff;
          text-decoration: none;
        }
        .back-link a:hover {
          text-decoration: underline;
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />
      <div className="reset-container">
        <h2>🔐 Reset Your Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Enter Your Registered Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="New Password"
              required
              value={form.newPassword}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              required
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn-reset">Reset Password</button>
        </form>
        <div className="back-link">
          <p>Remember your password? <Link to="/login">Login Here</Link></p>
        </div>
      </div>
    </>
  );
};

export default ResetPassword; 