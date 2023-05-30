import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Home'
const Theme = createContext(null)
function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  return (
      <Theme.Provider value={{darkTheme, setDarkTheme}}>
        <HomePage />
      </Theme.Provider>
  )
}

export {App, Theme}
