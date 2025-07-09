import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./CustomCarousel.module.css";

// Example slides; replace or extend as needed
const slides = [
  {
    image: "/files/ai_concepts.jpg",
    title: "UNDERSTANDING AI CONCEPTS",
    subtitle: "Explore the Brain Behind the Machines",
    desc: "Dive into Machine Learning, Deep Learning, Neural Networks, LLMs, and Generative AI.",
  },
  {
    image: "/files/tools2.jpg",
    title: "POWERFUL AI TOOLS",
    subtitle: "Boost Productivity With the Right Tools",
    desc: "Explore ChatGPT, Midjourney, Runway ML, and more.",
  },
  {
    image: "/files/ai_career.jpg",
    title: "EXPLORE AI CAREER PATHS",
    subtitle: "Your Roadmap to an AI Future",
    desc: "From Data Scientist to AI Researcher, map your journey.",
  },
  {
    image: "/files/ai_news.jpg",
    title: "STAY UPDATED WITH AI NEWS",
    subtitle: "Don’t Miss the AI Revolution",
    desc: "Stay informed about trends, ethics, and AI policy shifts.",
  },
];

export default function CustomCarousel() {
  return (
    <div className={styles.carouselContainer}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        showArrows
        swipeable
        emulateTouch
      >
        {slides.map((slide, idx) => (
          <div key={idx} className={styles.slide}>
            <img src={slide.image} alt={slide.title} className={styles.image} />
            <div className={styles.caption}>
              <h1>{slide.title}</h1>
              <h2>{slide.subtitle}</h2>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
} 