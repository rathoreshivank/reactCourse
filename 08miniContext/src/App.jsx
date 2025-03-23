import './App.css'
import { UserContextprovider } from './context/UserContextprovide'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
   <UserContextprovider>
      <Login/>
      <Profile/>
   </UserContextprovider>
  )
}

export default App
