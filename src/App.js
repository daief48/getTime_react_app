import { useState } from "react";
import React from "react";
function App() {
  let newTime = new Date().toLocaleTimeString();
  let [ctime,setCtime] = useState(newTime);

  const getTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  }
  return (
    <div className="box">
      <div className="increment">
      <h1>{ctime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
    </div>
  );
}

export default App;
