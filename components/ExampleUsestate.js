import { useState, useEffect } from 'react'
function ExampleUsestate() {
  const [color, setColor] = useState("pink")
  const click = color => {
    setColor(color)
  }
  useEffect(() => {
    document.body.style.color = color
  }, [color])
  return (
  <div className = "App">
    <h1>Welcome hi hello...</h1>
    <button onClick = {() => click("green")}>Change Color</button>
  </div>
  )
}

export default ExampleUsestate;