import React, { useState } from "react";
import { Link } from "react-router-dom";
// If using React Router, uncomment the next line:
// import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  // Uncomment and use useNavigate for real navigation in a router setup
  // const navigate = useNavigate();
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirm: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Simulate registration and redirect
    // navigate("/Login");
    alert("Registration successful! (Simulated)");
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }
        body {
          height: 100vh;
          background: url('/files/login.png') no-repeat center center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(5px);
        }
        .register-container {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 40px 30px;
          box-shadow: 0 0 30px rgba(0,0,0,0.3);
          backdrop-filter: blur(12px);
          width: 380px;
          color: white;
        }
        .register-container h2 {
          text-align: center;
          margin-bottom: 20px;
          font-weight: 600;
          font-size: 28px;
          color: #00ccff;
        }
        .register-container label {
          font-size: 14px;
          display: block;
          margin-bottom: 5px;
        }
        .register-container input {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          border: none;
          outline: none;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        .register-container input::placeholder {
          color: #ddd;
        }
        .register-container button {
          width: 100%;
          padding: 12px;
          background: #00ccff;
          border: none;
          border-radius: 8px;
          color: black;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }
        .register-container button:hover {
          background: #00aacc;
        }
        .register-container .login-link {
          text-align: center;
          margin-top: 15px;
          font-size: 14px;
        }
        .register-container .login-link a {
          color: #00ccff;
          text-decoration: none;
        }
        .register-container .login-link a:hover {
          text-decoration: underline;
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      <div className="register-container">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Full name"
            required
            value={form.fullname}
            onChange={handleChange}
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
            value={form.email}
            onChange={handleChange}
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="yourusername"
            required
            value={form.username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            required
            value={form.password}
            onChange={handleChange}
          />
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            id="confirm"
            name="confirm"
            placeholder="********"
            required
            value={form.confirm}
            onChange={handleChange}
          />
          <button type="submit">Register</button>
          <div className="login-link">
            Already have an account? <Link to="/login">Login here</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register; 