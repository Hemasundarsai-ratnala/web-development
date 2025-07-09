import React, { useState } from "react";
import { Link } from "react-router-dom";
// If using React Router, uncomment the next line:
// import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  // Uncomment and use useNavigate for real navigation in a router setup
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login and redirect
    // navigate("/home");
    alert("Login successful! (Simulated)");
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          background: url('/files/login.png') no-repeat center center fixed;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          backdrop-filter: blur(5px);
        }
        .login-box {
          background: rgba(0, 0, 0, 0.6);
          border-radius: 15px;
          padding: 40px 30px;
          width: 90%;
          max-width: 400px;
          box-shadow: 0 0 20px rgba(0,0,0,0.4);
          color: #fff;
        }
        .login-box h2 {
          text-align: center;
          margin-bottom: 30px;
          color: #00ccff;
        }
        .login-box label {
          display: block;
          margin: 10px 0 5px;
          font-size: 14px;
        }
        .login-box input {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 8px;
          margin-bottom: 15px;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 14px;
        }
        .login-box input:focus {
          outline: none;
          background-color: rgba(255, 255, 255, 0.15);
        }
        .login-box button {
          width: 100%;
          padding: 10px;
          background-color: #00ccff;
          color: #000;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s ease;
        }
        .login-box button:hover {
          background-color: #0099cc;
        }
        .login-box .footer {
          text-align: center;
          margin-top: 20px;
          font-size: 13px;
        }
        .login-box .footer a {
          color: #00ccff;
          text-decoration: none;
        }
        .login-box .footer a:hover {
          text-decoration: underline;
        }
        @media(max-width: 480px) {
          .login-box {
            padding: 30px 20px;
          }
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      <div className="login-box">
        <h2>Sign in to AI Discovery Zone</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Sign in</button>
          <div className="footer">
            <p>Don't have an account? <Link to="/register">Register</Link></p>
            <p><Link to="/reset-password">Forgot password?</Link></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login; 