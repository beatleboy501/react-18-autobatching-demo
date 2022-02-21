import React, { useEffect, useState, useRef } from 'react';
import './App.css';

const list = document.getElementById('renderList');

const useIsMount = () => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};

const fetchSomething = async () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, 1000);
  });

const App = () => {
  const isMount = useIsMount();
  useEffect(() => {
    if (isMount) return;
    const li = document.createElement('li');
    li.innerText = 'New Render'
    list?.appendChild(li);
  });
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const handleClick = () => {
    fetchSomething().then(() => {
      setCount(c => c + 1);
      setFlag(f => !f);
    });
  };
  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>Count: {count}</h1>
      <h1 style={{ color: flag ? "blue" : "black" }}>Flag: {`${flag}`}</h1>
    </div>
  );
};

export default App;
