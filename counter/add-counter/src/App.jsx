import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [num, setNum] = useState(0)

  function increase(){
    setNum(num + 1)
  }

  function decrease(){
    setNum(num - 1)
  }

  function reset(){
    setNum(0)
  }

  return (
    <div className="container">
    
 <h2 className="title">React Counter App</h2>
      <h1 className={num < 0 ? "negative" : ""}>{num}</h1>
      
      <div className="btns">
        <button className="dec" onClick={decrease}>Decrease</button>
        <button className="reset" onClick={reset}>Reset</button>
        <button className="inc" onClick={increase}>Increase</button>
      </div>

    </div>
  )
}

export default App