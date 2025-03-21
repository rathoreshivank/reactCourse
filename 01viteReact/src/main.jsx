import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return (
//     <div>
//       <h1>Custom App</h1>
//     </div>
//   )
// }

const anotherUser = " chai aur react"


// this is how react render jsx
const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: '_blank'},
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  
  reactElement
  
)
