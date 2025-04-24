import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import './App.css'

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Theme Switcher</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </header>
      <main>
        <p>This is a simple app to demonstrate the Context API.</p>
        <p>Toggle the theme and watch the magic happen!</p>
      </main>
    </div>
  )
}

export default App
