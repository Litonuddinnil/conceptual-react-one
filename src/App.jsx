 
import './App.css'
import Products from './components/products/Products'

function App() {
  const information ={
    message:"secret",
    phoneNo:"01398523437"
  }

  return (
    <>
      <h1>Hello React</h1>
      <Products info={information}></Products>
    </>
  )
}

export default App
