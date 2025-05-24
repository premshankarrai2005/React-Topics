import React, { useEffect, useRef, useState } from 'react';

export default function UseRef2() {
    
    
    const count = useRef(0);
  const [render, setRender] = useState(0);

  const increment = () => {
    count.current += 1;
    console.log("Count:", count.current);
  };

  const forceRender = () => {
    setRender((prev) => prev + 1);
  };

  return (
    <div>
      <p>Mutable Count (doesn't re-render): {count.current}</p>
      <button onClick={increment}>Increment Count</button>
      <button onClick={forceRender}>Force Re-render</button>
    </div>
  );
}
