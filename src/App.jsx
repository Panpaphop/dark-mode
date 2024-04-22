import { useState } from 'react'
import Content from "./components/Content"
import Title from "./components/Title"
import './App.css'

import { createContext } from 'react'
export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('dark')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <Title />
        <Content />
      </div>
    </ThemeContext.Provider>

  )
}

export default App
