import React, { useState } from 'react';
import './styles.css';

function WelcomeMessage({ name }) {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Hello, {name}!</h1>
      <p className="welcome-text">Welcome to our React.js demonstration.</p>
    </div>
  );
}

function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
    setClickCount(clickCount + 1);
  };

  return (
    <div className="toggle-container">
      <button 
        onClick={toggleMessage}
        className={`toggle-button ${showMessage ? 'active' : ''}`}
      >
        {showMessage ? 'Hide Secret Message' : 'Show Secret Message'}
      </button>
      
      {showMessage && (
        <div className="message-box">
          <p>This is a secret message that toggles!</p>
          <p>You've clicked the button {clickCount} times.</p>
        </div>
      )}
      
      <div className="demo-links">
        <a 
          href="../bootstrap-demo/index.html" 
          className="demo-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          ← View Bootstrap Demo
        </a>
        <a 
          href="../tailwind-demo/index.html" 
          className="demo-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Tailwind Demo →
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <WelcomeMessage name="Developer" />
      <ToggleMessage />
    </div>
  );
}

export default App;