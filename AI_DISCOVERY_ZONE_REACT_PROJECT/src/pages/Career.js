import React from "react";
import { Link } from "react-router-dom";

const Career = () => (
  <>
    <style>{`
      body{
        margin:0;
        padding:0;
        background-image: url('/files/roadmap1.png');
        background-repeat: no-repeat;
        background-size:cover;
        background-position:center;
        background-attachment:fixed ;
        font-family: 'Poppins', sans-serif;
      }
      .career-section {
        padding: 50px 20px;
        text-align: center;
      }
      .career-section h1 {
        font-size: 2.5rem;
        margin-bottom: 30px;
        color: #00e5ff;
        text-shadow: 0 0 10px #00e5ff88;
      }
      .career-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 30px;
        padding: 0 20px;
        max-width: 1200px;
        margin: auto;
      }
      .career-card {
        background: rgba(255, 255, 255, 0.05);
        border: 3px solid rgba(8, 217, 236, 0.922);
        border-radius: 15px;
        padding: 25px;
        transition: all 0.3s ease;
        box-shadow: 0 0 15px rgba(0, 255, 255, 0.1);
        text-align: center;
        backdrop-filter: blur(8px);
      }
      .career-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 25px rgba(0, 255, 255, 0.5);
      }
      .career-icon {
        font-size: 50px;
        margin-bottom: 15px;
        color: #00e5ff;
        text-shadow: 0 0 10px #00e5ff99;
      }
      .career-title {
        font-size: 20px;
        margin-bottom: 10px;
        font-weight: bold;
      }
      .career-desc {
        font-size: 14px;
        color: #ddd;
        line-height: 1.6;
      }
      .career-card a {
        display: inline-block;
        margin-top: 15px;
        padding: 8px 16px;
        background: #00e5ff;
        color: black;
        text-decoration: none;
        border-radius: 6px;
        font-weight: bold;
        transition: background 0.3s;
      }
      .career-card a:hover {
        background: #00bcd4;
      }
    `}</style>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
    <section className="career-section">
      <h1>AI Career Paths</h1>
      <div className="career-grid">
        <div className="career-card">
          <div className="career-icon">📊</div>
          <div className="career-title">Data Scientist</div>
          <div className="career-desc">Use statistical techniques and ML to analyze and interpret complex data to aid decision-making.</div>
          <a href="https://www.coursera.org/learn/data-science" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
        <div className="career-card">
          <div className="career-icon">🤖</div>
          <div className="career-title">AI Engineer</div>
          <div className="career-desc">Develop, deploy, and scale AI models for real-world applications like automation and robotics.</div>
          <a href="https://www.ibm.com/topics/ai-engineer" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
        <div className="career-card">
          <div className="career-icon">🧠</div>
          <div className="career-title">ML Engineer</div>
          <div className="career-desc">Design machine learning systems and ensure efficient data pipelines and model performance.</div>
          <a href="https://developers.google.com/machine-learning" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
        <div className="career-card">
          <div className="career-icon">🔬</div>
          <div className="career-title">Deep Learning Specialist</div>
          <div className="career-desc">Focus on neural network architectures like CNNs and RNNs to solve complex AI tasks.</div>
          <a href="https://www.deeplearning.ai/courses/" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
        <div className="career-card">
          <div className="career-icon">🗣️</div>
          <div className="career-title">NLP Engineer</div>
          <div className="career-desc">Work on AI systems that process and understand human language using large language models.</div>
          <a href="https://huggingface.co/learn/nlp-course" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
        <div className="career-card">
          <div className="career-icon">👁️</div>
          <div className="career-title">Computer Vision Engineer</div>
          <div className="career-desc">Build AI models that interpret and analyze visual data like images and video.</div>
          <a href="https://www.udacity.com/course/computer-vision-nanodegree--nd891" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
        <div className="career-card">
          <div className="career-icon">📚</div>
          <div className="career-title">Research Scientist</div>
          <div className="career-desc">Conduct foundational research in AI and publish findings to advance the field of artificial intelligence.</div>
          <a href="https://www.microsoft.com/en-us/research/research-area/artificial-intelligence/" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
        <div className="career-card">
          <div className="career-icon">🛠️</div>
          <div className="career-title">Robotics Engineer</div>
          <div className="career-desc">Design and build intelligent machines powered by AI for automation and real-world tasks.</div>
          <a href="https://www.udacity.com/course/robotics-software-engineer--nd209" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
        <div className="career-card">
          <div className="career-icon">📈</div>
          <div className="career-title">AI Product Manager</div>
          <div className="career-desc">Oversee AI project lifecycle, from concept to deployment, ensuring business and user value.</div>
          <a href="https://www.productschool.com/blog/product-management-2/ai-product-manager-guide" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
        <div className="career-card">
          <div className="career-icon">🧾</div>
          <div className="career-title">Prompt Engineer</div>
          <div className="career-desc">Specialize in designing prompts to get precise results from large language models like GPT and Claude.</div>
          <a href="https://www.linkedin.com/learning/skills/prompt-engineering" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
        <div className="career-card">
          <div className="career-icon">🎨</div>
          <div className="career-title">Generative AI Engineer</div>
          <div className="career-desc">Design and implement models like GANs, VAEs, and Transformers for image, text, and audio generation.</div>
          <a href="https://www.deeplearning.ai/short-courses/generative-ai-with-llms/" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
        <div className="career-card">
          <div className="career-icon">🧭</div>
          <div className="career-title">AI Agentic Systems Engineer</div>
          <div className="career-desc">Build autonomous AI agents that can reason, plan, and act independently in dynamic environments.</div>
          <a href="https://docs.langchain.com/" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
        <div className="career-card">
          <div className="career-icon">🔍</div>
          <div className="career-title">Advanced GPT Developer</div>
          <div className="career-desc">Fine-tune and optimize large language models like GPT for specific domains and high-stakes applications.</div>
          <a href="https://platform.openai.com/docs" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
        <div className="career-card">
          <div className="career-icon">⚖️</div>
          <div className="career-title">AI Policy Researcher</div>
          <div className="career-desc">Study the ethical, legal, and societal implications of AI to shape regulations and governance.</div>
          <a href="https://aiethics.princeton.edu/" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
        <div className="career-card">
          <div className="career-icon">🧪</div>
          <div className="career-title">Applied AI Researcher</div>
          <div className="career-desc">Translate AI theories into real-world solutions and deploy them in industry and enterprise contexts.</div>
          <a href="https://ai.google/research/" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
      </div>
    </section>
  </>
);

export default Career; 