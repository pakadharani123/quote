import React, { useState } from "react";
import "./App.css";

const quotes = [
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);
  };

  // IIFE example (logs once)
  (function logType() {
    console.log("Type of quote text:", typeof quote.text);
  })();

  return (
    <div className="container">
      <h1>Quote Generator</h1>
      <div className="quote-box">
        <p>"{quote.text}"</p>
        <h4>- {quote.author}</h4>
        <button onClick={generateQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;
