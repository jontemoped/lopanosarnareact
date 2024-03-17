import React, { useState } from 'react';

function FAQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
      </button>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );	
}

export default FAQ;
