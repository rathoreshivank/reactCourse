import Card from './components/card'
import './App.css'

function App() {

  // let myObj = {
  //   username: "ssr",
  //   age: 20
  // }

  // let newArr = [1,2,3]

  return (
    <>
      <h1 className=' bg-green-500 rounded-lg mb-5'>Shivank Rathore</h1>
      <Card username="shivank" btnText="visit me" />
    </>
  )
}

export default App
