import { useState, useEffect } from 'react'
import './App.css'

function App() {
  let [status, setStatus] = useState(true);     
  let [count, setCount] = useState(0);

  let increment = () => {                           
    let newCount = count + 1;
    localStorage.setItem("count", JSON.stringify(newCount));
    setCount(newCount);
  }

  let decrement = () => {
    let newCount = count - 1;
    localStorage.setItem("count", JSON.stringify(newCount));
    setCount(newCount)
  }

  useEffect(() => {
    let oldCount = JSON.parse(localStorage.getItem("count"));
    setCount(oldCount)
  });

  return (
    <>
      <h2>Hide, Show and Toggle</h2>
      <button onClick={() => setStatus(false)} style={{ "backgroundColor": "#a3a3a3" }}>Hide</button>
      <button onClick={() => setStatus(true)} style={{ "backgroundColor": "#a3a3a3" }}>Show</button>
      <button onClick={() => setStatus(!status)} style={{ "backgroundColor": "#a3a3a3" }}>Toggle</button>

      {status ?
        <div className="status">
          <h2>Counter</h2>
          <button onClick={increment}>Increment</button>
          {count}
          <button onClick={decrement} style={{ "marginLeft": "20px" }}>Decrement</button>
        </div>
        : null}
    </>
  )
}

export default App
