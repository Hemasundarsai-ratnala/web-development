import React from "react";

const News = () => (
  <>
    <style>{`
      body{
        margin:0;
        padding:0;
        background-image: url('/files/ainews1.png');
        background-repeat: no-repeat;
        background-size:cover;
        background-position:center;
        background-attachment:fixed ;
        font-family: Arial, sans-serif;
      }
      h1 {
        text-align: center;
        padding: 20px 0;
        color: #089fd2;
      }
      .news-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px; 
        padding: 40px 20px;
        max-width: 1000px;
        margin: auto;
      }
      .news-card {
        width: 90%;
        background: #ffffffb4;
        border-left: 6px solid #00bcd4;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        transition: transform 0.2s ease-in-out;
        margin-bottom: 30px;
      }
      .news-card:hover {
        transform: translateY(-5px);
      }
      .news-card h3 {
        color: #007c91;
        margin: 0 0 10px;
      }
      .news-card p {
        font-size: 16px;
        color: #333;
        line-height: 1.5;
      }
      .news-card a {
        color: #007bff;
        text-decoration: none;
        font-weight: bold;
      }
      .news-card a:hover {
        text-decoration: underline;
      }
    `}</style>
    <h1 style={{color: 'black'}}>Welcome To AI-NEWS</h1>
    <div className="news-container">
      <div className="news-card">
        <h3>AI Beats Human in Math Olympiad</h3>
        <p>DeepMind's AI outperformed top human contestants in symbolic math.<br />This marks a breakthrough in AI reasoning ability.<br />Solved Olympiad-level problems with speed and accuracy.<br />Utilized new transformer-logic hybrid architecture.<br />May reshape STEM education & automation.<br /><a href="https://www.newscientist.com/article/ai-math-deepmind/" target="_blank" rel="noopener noreferrer">See More</a></p>
      </div>
      <div className="news-card">
        <h3>OpenAI Launches GPT-5 Preview</h3>
        <p>GPT-5 supports vision, voice, and memory capabilities.<br />Handles video inputs and complex planning tasks.<br />Introduces persistent long-term memory support.<br />Early access granted to researchers and partners.<br />Focus on safer, more aligned AI.<br /><a href="https://openai.com/blog" target="_blank" rel="noopener noreferrer">See More</a></p>
      </div>
      <div className="news-card">
        <h3>AI Voice Scam Warning</h3>
        <p>FBI warns about AI-generated voice frauds on the rise.<br />Deepfakes used in scam calls to mimic relatives and bosses.<br />Public urged to use multi-layer verification.<br />Voice cloning accessible to anyone now.<br />Ethical AI laws gaining traction globally.<br /><a href="https://www.cnn.com/2025/06/ai-voice-fraud-warning" target="_blank" rel="noopener noreferrer">See More</a></p>
      </div>
      <div className="news-card">
        <h3>Google’s Gemini 2 Launches</h3>
        <p>Gemini 2 AI model released with multimodal features.<br />Understands video, text, and audio seamlessly.<br />Beats GPT-4 in factual consistency benchmarks.<br />Now integrated into Google Search and Workspace.<br />A major leap in user personalization.<br /><a href="https://blog.google/technology/ai/google-gemini-2-launch/" target="_blank" rel="noopener noreferrer">See More</a></p>
      </div>
      <div className="news-card">
        <h3>Adobe Adds AI to Photoshop</h3>
        <p>Photoshop now supports text-to-image generation.<br />Firefly AI integrated directly in editing panel.<br />Users can generate, expand, and remix images instantly.<br />Copyright-free generation enabled.<br />Revolutionizing creative workflows.<br /><a href="https://www.adobe.com/sensei/generative-ai.html" target="_blank" rel="noopener noreferrer">See More</a></p>
      </div>
      <div className="news-card">
        <h3>AI Finds New Antibiotics</h3>
        <p>MIT researchers use AI to discover novel antibiotics.<br />System scanned millions of molecules in days.<br />Found compound kills superbugs like MRSA.<br />First practical success in AI-led drug design.<br />Clinical trials expected soon.<br /><a href="https://news.mit.edu/2025/ai-finds-new-antibiotic-0601" target="_blank" rel="noopener noreferrer">See More</a></p>
      </div>
      <div className="news-card">
        <h3>Meta’s Llama 3 Released</h3>
        <p>Meta launches LLaMA 3 for open-source AI applications.<br />Models available with 8B to 65B parameters.<br />Trained on clean, diverse datasets.<br />Outperforms other open models in accuracy.<br />Available under permissive license.<br /><a href="https://ai.meta.com/blog/meta-llama-3-open-source" target="_blank" rel="noopener noreferrer">See More</a></p>
      </div>
      <div className="news-card">
        <h3>AI Tracks Deforestation in Real Time</h3>
        <p>NASA & Microsoft use AI to monitor forests globally.<br />Alerts generated in near real-time from satellite data.<br />Helps conservationists respond faster.<br />Supports Amazon and SE Asia tracking.<br />Open platform available via Planet AI.<br /><a href="https://blogs.microsoft.com/ai/forests" target="_blank" rel="noopener noreferrer">See More</a></p>
      </div>
      <div className="news-card">
        <h3>AI Avatars Take Over Customer Support</h3>
        <p>Many companies replacing chat support with AI avatars.<br />Synthesia and Soul Machines lead the market.<br />Real-time facial expressions boost user trust.<br />Cuts costs by up to 70%.<br />Raises concerns on empathy and ethics.<br /><a href="https://techcrunch.com/2025/06/ai-avatar-customer-support/" target="_blank" rel="noopener noreferrer">See More</a></p>
      </div>
      <div className="news-card">
        <h3>AI Detects Alzheimer’s Early</h3>
        <p>AI model predicts Alzheimer’s up to 7 years in advance.<br />Trained on speech patterns and MRI scans.<br />Outperforms traditional diagnostic methods.<br />Being tested in major hospitals.<br />Hope for early intervention and care.<br /><a href="https://www.nature.com/articles/ai-alzheimers-2025" target="_blank" rel="noopener noreferrer">See More</a></p>
      </div>
      {/* ...continue for all news cards as in the HTML... */}
    </div>
  </>
);

export default News; 