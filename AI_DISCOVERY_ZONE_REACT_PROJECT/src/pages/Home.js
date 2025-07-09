import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CustomCarousel from '../components/CustomCarousel';

const Home = () => (
  <>
    <style>{`
      body {
        margin: 0;
        padding: 0;
        background: url('/files/bg1.png') no-repeat center center fixed;
        background-size: cover;
        font-family: 'Poppins', sans-serif;
      }
      .mt-4 { color: white; }
      h1, h2, h3 { text-align: center; }
      .navbar-custom { display: flex; justify-content: center; gap: 30px; padding: 12px; border-radius: 0 0 20px 20px; }
      .navbar-custom a { color: white; padding: 8px 15px; text-decoration: none; font-size: 17px; transition: background-color 0.3s, color 0.3s; }
      .navbar-custom a:hover { background-color: #00bfff; color: black; border-radius: 5px; }
      .carousel-container {
        max-width: 1200px;
        margin: 30px auto;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
        position: relative;
      }
      .carousel-root, .carousel, .carousel .carousel-slider {
        height: 80vh !important;
        min-height: 350px;
      }
      .carousel .carousel-slider .slide {
        height: 100% !important;
        min-height: 350px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .carousel .carousel-slider img {
        height: 100%;
        object-fit: cover;
        width: 100%;
        display: block;
        margin: 0 auto;
      }
      .carousel-caption {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.6);
        padding: 24px 32px;
        border-radius: 15px;
        max-width: 700px;
        width: 90%;
        text-align: center;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
        z-index: 2;
      }
      .carousel-caption h1 {
        color: #00ffff;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 10px;
        text-decoration: underline;
      }
      .carousel-caption h2 {
        color: #ffffff;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 8px;
      }
      .carousel-caption p {
        color: #ffffff;
        font-size: 1rem;
        font-weight: 400;
        margin: 0;
      }
      @media (max-width: 768px) {
        .carousel-caption {
          padding: 16px;
          width: 95%;
        }
        .carousel-caption h1 {
          font-size: 1.4rem;
        }
        .carousel-caption h2 {
          font-size: 1rem;
        }
        .carousel-caption p {
          font-size: 0.9rem;
        }
      }
      .carousel .control-arrow {
        background: rgba(0,191,255,0.7);
        border-radius: 50%;
        width: 48px;
        height: 48px;
        top: 50% !important;
        transform: translateY(-50%);
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        z-index: 2;
        margin-top: 0 !important;
      }
      .carousel .control-arrow:before, .carousel .control-arrow:after {
        color: #fff;
        font-size: 32px;
      }
      .carousel .control-arrow:hover {
        background: #00bfff;
      }
      .carousel .control-next.control-arrow { right: 15px; }
      .carousel .control-prev.control-arrow { left: 15px; }
      .carousel .carousel-status { display: none; }
      .carousel .thumbs-wrapper { display: none; }
      .carousel .carousel .slide { background: none; }
      .card-container { background-color: rgb(0, 0, 0);display: flex; flex-wrap: wrap; justify-content: center; gap: 30px;padding: 40px; margin: 30px auto;border: 2px solid black; border-radius: 35px; max-width: 1200px; }
      .card { background-color: rgb(0, 0, 0); width: 250px; height: 380px; border-radius: 50px; overflow: hidden; box-shadow: 0 0 20px rgb(0, 0, 0); transition: transform 0.3s ease, box-shadow 0.3s ease; position: relative; cursor: pointer; }
      .card:hover { transform: scale(1.05); }
      .card img { background-color: rgb(0, 0, 0); width: 100%; height: 160px; object-fit: cover;border: 1px solid black;}
      .card-content {background-color: rgb(0, 0, 0);background-size: cover;padding: 5px;border: 2px solid black; }
      .card h3 { margin: 10px 0; font-size: medium;font-weight: bold;color: white;}
      .card p { font-size: 12px;color: white;font-weight: bold;}
      .card a { display: inline-block; margin-top: 10px; text-decoration: none; font-weight: bold;color: white;}
      .card green{background-color: black;}
      .card blue{background-color: black;}
      .card purple{background-color: black;}
      .card red{background-color: black;}
      .red:hover { box-shadow: 0 0 30px #ff0000; }
      .green:hover { box-shadow: 0 0 30px #00ff66; }
      .blue:hover { box-shadow: 0 0 30px #00bfff; }
      .purple:hover { box-shadow: 0 0 30px #ba55d3; }
      .red a { color: #ff4d4d; }
      .green a { color: #00ff99; }
      .blue a { color: #00ccff; }
      .purple a { color: #cc66ff; }
    `}</style>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet" />

    <h1 className="mt-4">Welcome To 🤖 AI Discovery 🔍 Zone</h1>
    <div className="d-flex justify-content-between align-items-center px-4 py-3">
      <div></div>
      <div>
        <Link to="/login" className="btn btn-outline-info me-2" style={{borderRadius: '20px'}}><b>Login</b></Link>
        <Link to="/register" className="btn btn-info text-dark" style={{borderRadius: '20px'}}><b>Create Account</b></Link>
      </div>
    </div>

    <nav className="navbar-custom">
      <Link to="/home"><b>Home</b></Link>
      <Link to="/concepts"><b>AI Concepts</b></Link>
      <Link to="/tools"><b>AI Tools</b></Link>
      <Link to="/career"><b>AI Career Guide</b></Link>
      <Link to="/news"><b>AI News</b></Link>
      <Link to="/about-us"><b>About us</b></Link>
    </nav>

    <div className="carousel-container">
      <CustomCarousel />
    </div>
    <div className="card-container">
      <div className="card red">
        <img src="/files/concept.jpg" alt="AI Image" />
        <div className="card-content">
          <h3>AI Concepts</h3>
          <p>Understand the building blocks of Artificial Intelligence – from Neural Networks and Machine Learning to Deep Learning and Generative AI. Learn how these concepts power intelligent machines.</p>
          <a href="/concepts.html">SEE MORE</a>
        </div>
      </div>
      <div className="card green">
        <img src="/files/tools1.jpg" alt="ML Image" />
        <div className="card-content">
          <h3>AI Tools</h3>
          <p>Explore powerful AI tools like ChatGPT, Midjourney, Runway ML, and more that are transforming the way we create, work, and solve problems with automation and intelligence.</p>
          <a href="/tools.html">SEE MORE</a>
        </div>
      </div>
      <div className="card blue">
        <img src="/files/career.jpg" alt="DL Image" />
        <div className="card-content">
          <h3>AI Career Paths</h3>
          <p>Navigate through top AI career roles such as Data Scientist, AI Engineer, and ML Researcher. Discover the skills, roadmaps, and resources needed to kickstart a career in AI.</p>
          <a href="/career.html">SEE MORE</a>
        </div>
      </div>
      <div className="card purple">
        <img src="/files/news.jpg" alt="LLM Image" />
        <div className="card-content">
          <h3>AI News</h3>
          <p>Stay updated with the latest breakthroughs, innovations, and real-world applications of AI. Follow industry trends, global policies, and ethical developments shaping the future.</p>
          <a href="/news.html">SEE MORE</a>
        </div>
      </div>
    </div>
    <footer style={{width: '100%', background: 'rgba(0, 0, 0, 0.88)', color: '#fff', fontFamily: 'Poppins, sans-serif', padding: '40px 0 20px'}}>
      <div className="container text-center">
        <h4 style={{color: '#00ccff'}}>🌐 AI Discovery Zone</h4>
        <p style={{maxWidth: '800px', margin: '10px auto', fontSize: '14px'}}>
          Discover the world of AI — from fundamentals to future innovations. Stay curious. Stay updated.
        </p>
        <div className="d-flex justify-content-center flex-wrap my-3">
          <Link to="/home" className="mx-3 text-decoration-none" style={{color: '#00ccff'}}>Home</Link>
          <Link to="/concepts" className="mx-3 text-decoration-none" style={{color: '#00ccff'}}>Concepts</Link>
          <Link to="/tools" className="mx-3 text-decoration-none" style={{color: '#00ccff'}}>Tools</Link>
          <Link to="/career" className="mx-3 text-decoration-none" style={{color: '#00ccff'}}>Career</Link>
          <Link to="/news" className="mx-3 text-decoration-none" style={{color: '#00ccff'}}>News</Link>
        </div>
        <div className="my-3">
          <a href="#" className="mx-2" style={{color: '#00ccff', fontSize: '20px'}}><i className="bi bi-facebook"></i></a>
          <a href="#" className="mx-2" style={{color: '#00ccff', fontSize: '20px'}}><i className="bi bi-twitter"></i></a>
          <a href="#" className="mx-2" style={{color: '#00ccff', fontSize: '20px'}}><i className="bi bi-linkedin"></i></a>
          <a href="#" className="mx-2" style={{color: '#00ccff', fontSize: '20px'}}><i className="bi bi-instagram"></i></a>
          <a href="#" className="mx-2" style={{color: '#00ccff', fontSize: '20px'}}><i className="bi bi-github"></i></a>
        </div>
        <div style={{fontSize: '13px'}}>
          <p>📧 <a href="mailto:discoverai@example.com" style={{color: '#66ffff', textDecoration: 'none'}}>discoverai@example.com</a></p>
          <p>© 2025 AI Discovery Zone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </>
);

export default Home;
