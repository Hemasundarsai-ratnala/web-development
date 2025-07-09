import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CustomCarousel from '../components/CustomCarousel';
import ConceptsCarousel from '../components/ConceptsCarousel';

const Concepts = () => (
  <>
    <style>{`
      body{
        margin:0;
        padding:0;
        background-image: url('/files/aiconcepts1.png');
        background-repeat: no-repeat;
        background-size:cover;
        background-position:center;
        background-attachment:fixed ;
        justify-content: center;
      }
      .mt-4{
        color: white;
        background-color: #00000087;
      }
      .carousel-container {
        max-width: 1200px;
        margin: 30px auto;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
      }
      .carousel-root, .carousel, .carousel .carousel-slider {
        height: 80vh !important;
        min-height: 350px;
      }
      .carousel .carousel-slider .slide {
        height: 100% !important;
        min-height: 350px;
        position: relative;
      }
      .carousel .carousel-slider img {
        height: 80vh !important;
        object-fit: cover;
        width: 100%;
        display: block;
        margin: 0 auto;
      }
      .carousel-caption {
        background-color: rgba(0, 0, 0, 0.6);
        padding: 24px 32px;
        border-radius: 15px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: auto;
        max-width: 600px;
        min-width: unset;
        text-align: center;
        z-index: 10;
        word-break: break-word;
        white-space: normal;
        box-shadow: 0 4px 24px rgba(0,0,0,0.25);
      }
      .carousel-caption h1 {
        color: aqua;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 10px;
        text-decoration: underline;
      }
      .carousel-caption h5 {
        color: #ffee00;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 8px;
      }
      .carousel-caption p {
        color: white;
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0;
      }
      @media (max-width: 768px) {
        .carousel-root, .carousel, .carousel .carousel-slider, .carousel .carousel-slider img {
          height: 60vh !important;
        }
        .carousel-caption {
          padding: 10px 8px;
          max-width: 98vw;
        }
        .carousel-caption h1 { font-size: 1.1rem; }
        .carousel-caption h5 { font-size: 0.95rem; }
        .carousel-caption p { font-size: 0.85rem; }
      }
      h1 {
        text-align: center;
        margin-top: 20px;
        font-size: 2rem;
        color: cyan;
      }
      .scroll-list__wrp {
        width: 100%;
        height: 700px;
        overflow-y: auto;
        padding: 50px;
        box-shadow: 0px 7px 46px 0px rgba(0, 0, 0, 0.3);    
        border-radius: 8px;
        scroll-behavior: smooth;
      }
      .scroll-item {
        margin: 30px auto;
        padding: 30px;
        max-width: 1200px;
        background-color: rgb(1, 1, 1);
        border-radius: 12px;
        transition: all 0.4s ease-in-out;
        opacity: 0.8;
        transform: scale(0.95);
      }
      .scroll-item.active {
        opacity: 1;
        transform: scale(1);
        background-color: rgba(5, 5, 5, 0.896);
        border-left: 5px solid cyan;
      }
      .scroll-item h2 {
        margin-bottom: 10px;
        color: #00d4ff;
      }
      .scroll-item p {
        font-size: 15px;
        color: white;
      }
    `}</style>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <h1 className="mt-4" align="center">Welcome To AI Concepts</h1>
    <div className="carousel-container">
      <ConceptsCarousel />
    </div>
    <div className="scroll-list__wrp" id="scrollWrapper">
      <div className="scroll-item"><h2>1. Introduction to AI</h2><p>Understand the basics of Artificial Intelligence and how it mimics human intelligence using machines.</p><a href="https://www.geeksforgeeks.org/artificial-intelligence/what-is-artificial-intelligence-ai/" target="_blank" rel="noopener noreferrer">SEE MORE</a></div>
      <div className="scroll-item"><h2>2. Supervised Learning</h2><p>Learn how models are trained using labeled data to predict outcomes or classify inputs accurately.</p><a href="https://www.geeksforgeeks.org/machine-learning/supervised-machine-learning/" target="_blank" rel="noopener noreferrer">SEE MORE</a></div>
      <div className="scroll-item"><h2>3. Unsupervised Learning</h2><p>Explore algorithms that identify hidden patterns in data without any labels or supervision.</p><a href="https://www.geeksforgeeks.org/machine-learning/unsupervised-learning/" target="_blank" rel="noopener noreferrer">SEE MORE</a></div>
      <div className="scroll-item"><h2>4. Reinforcement Learning</h2><p>Experience AI that learns via rewards and penalties while interacting with an environment.</p><a href="https://www.geeksforgeeks.org/machine-learning/what-is-reinforcement-learning/" target="_blank" rel="noopener noreferrer">SEE MORE</a></div>
      <div className="scroll-item"><h2>5. Machine Learning</h2><p>Dive into systems that improve performance on tasks by learning from data over time.</p><a href="https://www.geeksforgeeks.org/machine-learning/machine-learning/" target="_blank" rel="noopener noreferrer">SEE MORE</a></div>
      <div className="scroll-item"><h2>6. Deep Learning</h2><p>Discover layered neural networks that learn complex features from data like images or speech.</p><a href="https://www.geeksforgeeks.org/deep-learning/introduction-deep-learning/" target="_blank" rel="noopener noreferrer">SEE MORE</a></div>
      <div className="scroll-item"><h2>7. Neural Networks</h2><p>Understand models inspired by the brain that consist of interconnected layers to process data.</p><a href="https://www.geeksforgeeks.org/machine-learning/neural-networks-a-beginners-guide/" target="_blank" rel="noopener noreferrer">SEE MORE</a></div>
      <div className="scroll-item"><h2>8. Convolutional Neural Networks (CNN)</h2><p>Explore deep learning models specialized for analyzing visual data like images and videos.</p><a href="https://www.geeksforgeeks.org/machine-learning/introduction-convolution-neural-network/" target="_blank" rel="noopener noreferrer">SEE MORE</a></div>
      <div className="scroll-item"><h2>9. Generative AI</h2><p>Learn how AI generates new content—images, text, or music—by learning existing patterns.</p><a href="https://www.geeksforgeeks.org/artificial-intelligence/what-is-generative-ai/" target="_blank" rel="noopener noreferrer">SEE MORE</a></div>
      <div className="scroll-item"><h2>10. Agentic AI</h2><p>Meet intelligent agents that act autonomously, make decisions, and complete complex tasks.</p><a href="https://www.geeksforgeeks.org/artificial-intelligence/what-is-agentic-ai/" target="_blank" rel="noopener noreferrer">SEE MORE</a></div>
    </div>
    {/* For scroll animation, consider using a React Intersection Observer hook in the future */}
  </>
);

export default Concepts; 