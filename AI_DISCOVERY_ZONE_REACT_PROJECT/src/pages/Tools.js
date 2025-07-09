import React from "react";

const Tools = () => (
  <>
    <style>{`
      body {
        margin: 0;
        padding: 0;
        background-image: url('/files/tools.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        font-family: 'Poppins', sans-serif;
        color: white;
      }
      h1 {
        text-align: center;
        padding-top: 30px;
        color: #00ccff;
      }
      .tools-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding: 40px;
        max-width: 1400px;
        margin: auto;
      }
      .tool-card {
        background: rgba(249, 248, 248, 0.919);
        border-radius: 15px;
        overflow: hidden;
        padding: 20px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        transition: transform 0.3s, box-shadow 0.3s;
        text-align: center;
      }
      .tool-card:hover {
        transform: scale(1.04);
      }
      .tool-card img {
        width: 80px;
        height: 80px;
        object-fit: contain;
        margin-bottom: 10px;
      }
      .tool-card h3 {
        margin: 10px 0;
        font-size: 1.2rem;
        color: #00ccff;
      }
      .tool-card p {
        font-size: 0.9rem;
        color: #050505;
      }
      .glow-chatgpt:hover { box-shadow: 0 0 30px #00ffcc; }
      .glow-dallE:hover { box-shadow: 0 0 30px #ff99cc; }
      .glow-copilot:hover { box-shadow: 0 0 30px #99ccff; }
      .glow-jasper:hover { box-shadow: 0 0 30px #ffcc66; }
      .glow-synthesia:hover { box-shadow: 0 0 30px #66ccff; }
      .glow-stability:hover { box-shadow: 0 0 30px #ff6666; }
      .glow-midjourney:hover { box-shadow: 0 0 30px #cc66ff; }
      .glow-runway:hover { box-shadow: 0 0 30px #66ff66; }
      .glow-notion:hover { box-shadow: 0 0 30px #ffccff; }
      .glow-grammarly:hover { box-shadow: 0 0 30px #66ffcc; }
      .glow-resemble:hover { box-shadow: 0 0 30px #ff9966; }
      .glow-deepL:hover { box-shadow: 0 0 30px #66ff99; }
      .glow-descript:hover { box-shadow: 0 0 30px #ccff66; }
      .glow-scribe:hover { box-shadow: 0 0 30px #99ff99; }
      .glow-hugging:hover { box-shadow: 0 0 30px #ff6699; }
      .glow-lumen5:hover { box-shadow: 0 0 30px #66cc99; }
      .glow-otter:hover { box-shadow: 0 0 30px #cc9966; }
      .glow-stablevideo:hover { box-shadow: 0 0 30px #6699ff; }
      .glow-datavirtuality:hover { box-shadow: 0 0 30px #cc66cc; }
      .glow-elevenlabs:hover { box-shadow: 0 0 30px #ff66cc; }
    `}</style>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />
    <h1>Welcome To AI Tools Library</h1>
    <div className="tools-grid">
      <div className="tool-card glow-chatgpt">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/openai.svg" alt="ChatGPT" />
        <h3>ChatGPT</h3>
        <p>OpenAI’s conversational AI for writing, coding, and education.</p>
      </div>
      <div className="tool-card glow-dallE">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/dalle.svg" alt="DALL·E" />
        <h3>DALL·E</h3>
        <p>Generate high-quality images from text prompts.</p>
      </div>
      <div className="tool-card glow-copilot">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/github.svg" alt="Copilot" />
        <h3>GitHub Copilot</h3>
        <p>AI-powered code completion and suggestions in real-time.</p>
      </div>
      <div className="tool-card glow-jasper">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/jasper.svg" alt="Jasper" />
        <h3>Jasper AI</h3>
        <p>AI content generation for blogs, marketing, and SEO.</p>
      </div>
      <div className="tool-card glow-synthesia">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/synthesia.svg" alt="Synthesia" />
        <h3>Synthesia</h3>
        <p>Create AI-driven video avatars from text scripts.</p>
      </div>
      <div className="tool-card glow-stability">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/stabilityai.svg" alt="Stability" />
        <h3>Stable Diffusion</h3>
        <p>Open-source model for image generation and art creation.</p>
      </div>
      <div className="tool-card glow-midjourney">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/midjourney.svg" alt="Midjourney" />
        <h3>MidJourney</h3>
        <p>AI-powered image generation with artistic styles.</p>
      </div>
      <div className="tool-card glow-runway">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/runway.svg" alt="Runway" />
        <h3>Runway ML</h3>
        <p>Creative video and image tools powered by AI models.</p>
      </div>
      <div className="tool-card glow-notion">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/notion.svg" alt="Notion AI" />
        <h3>Notion AI</h3>
        <p>AI assistant within Notion for summarization and writing.</p>
      </div>
      <div className="tool-card glow-grammarly">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/grammarly.svg" alt="Grammarly" />
        <h3>Grammarly</h3>
        <p>AI-enhanced writing assistant to refine grammar and tone.</p>
      </div>
      <div className="tool-card glow-resemble">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/resembleai.svg" alt="Resemble" />
        <h3>Resemble AI</h3>
        <p>Text-to-speech AI that creates realistic custom voices.</p>
      </div>
      <div className="tool-card glow-deepL">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/deepl.svg" alt="DeepL" />
        <h3>DeepL Translator</h3>
        <p>Highly accurate AI-driven translation in multiple languages.</p>
      </div>
      <div className="tool-card glow-descript">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/descript.svg" alt="Descript" />
        <h3>Descript</h3>
        <p>Audio and video editing with transcription and overdub.</p>
      </div>
      <div className="tool-card glow-scribe">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/scribe.svg" alt="Scribe" />
        <h3>Scribe</h3>
        <p>Create step-by-step guides automatically from your actions.</p>
      </div>
      <div className="tool-card glow-hugging">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/huggingface.svg" alt="Hugging Face" />
        <h3>Hugging Face</h3>
        <p>Repository of NLP/ML models and APIs for developers.</p>
      </div>
      <div className="tool-card glow-lumen5">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/lumen5.svg" alt="Lumen5" />
        <h3>Lumen5</h3>
        <p>AI video creation platform for marketing content.</p>
      </div>
      <div className="tool-card glow-otter">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/otterai.svg" alt="Otter.ai" />
        <h3>Otter.ai</h3>
        <p>Automated meeting notes with real-time transcription.</p>
      </div>
      <div className="tool-card glow-stablevideo">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/stabilityai.svg" alt="Stable Video" />
        <h3>Stable Video</h3>
        <p>Generate or edit videos frame-by-frame using AI.</p>
      </div>
      <div className="tool-card glow-datavirtuality">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/databricks.svg" alt="Data Virtuality" />
        <h3>Data Virtuality</h3>
        <p>AI-driven data integration and management platform.</p>
      </div>
      <div className="tool-card glow-elevenlabs">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/elevenlabs.svg" alt="Eleven Labs" />
        <h3>ElevenLabs</h3>
        <p>Ultra-realistic AI text-to-speech synthesis.</p>
      </div>
    </div>
  </>
);

export default Tools; 