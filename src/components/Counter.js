// Import `useState` with React to take advantage of the hook.
import React, { useState } from 'react';

export default function Counter() {
  let [count, setCount] = useState(0);

  // This is a handler that we will reference in our `onClick` attribute later
  const handleClick = () => {
    setCount((count + 1));
    console.log(`New value of count: ${count}`);
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        <p className="card-text">Click Count: {count}</p>
        {/* In our button element, we add a onClick event that invokes our handleClick method */}
        <button className="btn btn-primary" type="button" onClick={handleClick}>
          Increment
        </button>
      </div>
    </div>
  );
}
