import { useState } from 'react'
import Content from "./components/Content"
import Title from "./components/Title"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Title />
      <Content />

    </div>
  )
}

export default App
