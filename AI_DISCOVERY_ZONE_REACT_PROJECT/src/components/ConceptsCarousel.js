import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./CustomCarousel.module.css";

const slides = [
  {
    image: "/files/ai.webp",
    title: "ARTIFICIAL INTELLIGENCE",
    subtitle: "Machines with human-like abilities",
    desc: "AI refers to machines designed to mimic human thinking, decision-making, and problem-solving skills.",
  },
  {
    image: "/files/ml1.jpg",
    title: "MACHINE LEARNING",
    subtitle: "Learning from Data",
    desc: "ML enables systems to learn patterns from data and improve their performance over time without explicit programming.",
  },
  {
    image: "/files/dl.webp",
    title: "DEEP LEARNING",
    subtitle: "Multi-layered Neural Brains",
    desc: "DL uses complex neural networks with many layers to understand intricate data like speech, images, and text.",
  },
  {
    image: "/files/nn.jpg",
    title: "NEURAL NETWORKS",
    subtitle: "The Brain of AI",
    desc: "Neural networks simulate the way human brains process information, forming the foundation of DL and ML models.",
  },
  {
    image: "/files/cnn.png",
    title: "CONVOLUTIONAL NEURAL NETWORKS",
    subtitle: "AI Vision Experts",
    desc: "CNNs are deep learning models designed to process and classify images, powering facial recognition, object detection, and more.",
  },
  {
    image: "/files/genai.webp",
    title: "GENERATIVE AI",
    subtitle: "Machines that Create",
    desc: "Gen-AI models like ChatGPT, DALL·E, and MidJourney create new content—text, images, and music—mimicking creativity.",
  },
];

export default function ConceptsCarousel() {
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
              <h1><u>{slide.title}</u></h1>
              <h5 style={{ color: '#ffee00', fontWeight: 600 }}>{slide.subtitle}</h5>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
} 