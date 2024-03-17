
import React, { useState, useEffect } from 'react';

const Captcha = ({ onValidate }) => {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
  const [userInput, setUserInput] = useState('');


  useEffect(() => {
    // Refresh numbers on each mount
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
  }, []);

  const handleChange = (e) => {
    setUserInput(e.target.value);
    onValidate(parseInt(e.target.value, 10) === num1 + num2);
  };

  return (
    <div>
      <label htmlFor="captcha">Solve {num1} + {num2}: </label>
      <input
        id="captcha"
        type="text"
        value={userInput}
        onChange={handleChange}
        placeholder="Answer"
        required
      />
    </div>
  );
};

export default Captcha;
