import { useState } from 'react';
import QuoteGenTemplate from './quoteGenTemplate.jsx'
import './QuoteGenerator.css'

const QuoteGen = () => {
  const [quotes, setQuote] = useState({
    quote: "",
    author: "",
    category: ""
  });
  
  const [error, setError] = useState("");

  const fetchQuote = async () => {
    try {
      setError("");
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',
        headers: {
          "X-Api-Key": VITE_API_NINJAS_KEY
        }
      });
      if (!response.ok) {
        throw new Error("Failed to fetch quote.");
      }
      const data = await response.json();
      const random = Math.floor(Math.random() * data.length);
      if (data.length > 0) {
        setQuote({
          quote: data[random].quote,
          author: data[random].author,
          category: data[random].category
        });
      } else {
        setQuote({
          quote: "No quote found.",
          author: "",
          category: ""
        });
      }
    } catch (err) {
      setError('Failed to fetch: ' + err.message);
    }
  };

  return (
    <div className="quote-container">
    <h2>QUOTE GENERATOR</h2>
      <div className="text-container">
        {error ? (
          <span style={{ color: "red" }}>{error}</span>
        ) : (
          <>
            <QuoteGenTemplate quote={quotes.quote} author={quotes.author} category={quotes.category}/>
          </>
        )}
      </div>
      <div className="btn-container">
      <button onClick={fetchQuote}>Generate Quote</button>
      </div>
    </div>
  );
};

export default QuoteGen;